import BuyResidentialPage from "@/template/BuyResidentialPage";
import { getProfiles } from "@/lib/actions/profile-actions";

async function BuyResidential({ searchParams }) {
  try {
    const params = await searchParams;
    let profiles = await getProfiles();

    if (params.category) {
      profiles = profiles.filter((item) => item.category === params.category);
    }

    return (
      <div>
        <BuyResidentialPage data={profiles} />
      </div>
    );
  } catch (error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
}

export default BuyResidential;
