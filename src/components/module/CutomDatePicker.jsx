import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CutomDatePicker({ profileData, setProfileData }) {
  const handleChange = (e) => {
    console.log(e);
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="mb-[60px]">
      <p className="mb-[5px]">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default CutomDatePicker;
