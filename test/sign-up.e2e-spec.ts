import { expect, test } from "@playwright/test";

test("sign up is succesfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Nome do responsável").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Telefone").fill("49987654321");
  await page.getByRole("button", { name: "Cadastrar" }).click();

  const toast = page.getByText("Cadastro realizado com sucesso");

  await expect(toast).toBeVisible();
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Invalid Name");
  await page.getByLabel("Nome do responsável").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Telefone").fill("49987654321");
  await page.getByRole("button", { name: "Cadastrar" }).click();

  const toast = page.getByText("Erro ao cadastrar estabelecimento");

  await expect(toast).toBeVisible();
});

test("navigate to login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  await expect(page.url()).toContain("/sign-in");
});
