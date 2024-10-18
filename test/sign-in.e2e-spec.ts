import { expect, test } from "@playwright/test";

test("sign in is succesfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Link de autenticação enviado para seu e-mail");

  expect(toast).toBeVisible();
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Erro ao enviar link de autenticação");

  expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page
    .getByRole("link", { name: "Cadastrar novo estabelecimento" })
    .click();

  expect(page.url()).toContain("/sign-up");
});
