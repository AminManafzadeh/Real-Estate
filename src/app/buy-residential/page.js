import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const params = await searchParams;
  const data = await res.json();
  console.log(data.data);
  if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  console.log(data);

  let finalData = data.data;
  if (params.category) {
    finalData = finalData.filter((item) => item.category === params.category);
  }

  return (
    <div>
      <BuyResidentialPage data={finalData} />
    </div>
  );
}

export default BuyResidential;
