import { auth } from "@clerk/nextjs/server";
import { getProducts } from "../../server/db/products";
import { NoProducts } from "./_components/NoProducts";
import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "./_components/ProductGrid";

const DashboardPage = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    redirectToSignIn();
    return null;
  }

  let products = [];
  try {
    products = await getProducts(userId, { limit: 6 });
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold flex justify-between">
        <Link
          className="group flex gap-2 items-center hover:underline"
          href="/dashboard/products"
        >
          Products
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Button asChild className="bg-zinc-100 text-black hover:bg-white">
          <Link href="/dashboard/products/new">
            <PlusIcon className="size-4 mr-2 " />
            New Product
          </Link>
        </Button>
      </h2>
      <ProductGrid products={products} />
    </div>
  );
};

export default DashboardPage;
