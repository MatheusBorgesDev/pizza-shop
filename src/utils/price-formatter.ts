export function formatPrice(priceInCents: number): string {
  const priceInReal = priceInCents / 100;
  const formattedPrice = priceInReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedPrice;
}
