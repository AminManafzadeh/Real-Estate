function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mbb-[5px]">دسته بندی</p>
      <div className="flex">
        <div className="flex items-center justify-between bg-[#304ffe18] text-mainBlue ml-[30px] w-[70px] py-1 px-2 rounded-[5px] cursor-pointer">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            value="villa"
            onChange={handleChange}
            checked={category === "villa"}
            name="category"
            id="villa"
          />
        </div>

        <div className="flex items-center justify-between bg-[#304ffe18] text-mainBlue ml-[30px] w-[90px] py-1 px-2 rounded-[5px] cursor-pointer">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between bg-[#304ffe18] text-mainBlue ml-[30px] w-[70px] py-1 px-2 rounded-[5px] cursor-pointer">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between bg-[#304ffe18] text-mainBlue ml-[30px] w-[70px] py-1 px-2 rounded-[5px] cursor-pointer">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
