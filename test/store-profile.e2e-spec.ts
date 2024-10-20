import { expect, test } from "@playwright/test";

test("update profile succesfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();
  await page.getByLabel("Nome").fill("New Valid Name");
  await page.getByLabel("Descrição").fill("New restaurant description");
  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  const restaurantName = await page.getByText("New Valid Name");

  await expect(restaurantName).toBeVisible();
});
