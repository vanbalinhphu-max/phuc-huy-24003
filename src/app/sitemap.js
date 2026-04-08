export const products = [
  {
    slug: "product-1",
    title: "product 1",
    description: "Day la mo ta cua product 1",
  },
  {
    slug: "product-2",
    title: "product 2",
    description: "Day la mo ta cua product 2",
  },
];

export default function sitemap() {
  const productUrls = products.map((product) => {
    return {
      url: `${process.env.API_BASE_URL}/products/${product.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: process.env.API_BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${process.env.API_BASE_URL}/about`
    },
    ...productUrls
  ];
}
