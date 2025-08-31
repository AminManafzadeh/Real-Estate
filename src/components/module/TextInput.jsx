import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: p2e(e.target.value) });
  };

  return (
    <div>
      <p className="text-lg mb-[5px]">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={handleChange}
          className=" inputArea !h-[100px] focus:border focus:border-solid focus:border-mainBlue focus:outline-none"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={handleChange}
          className="inputArea focus:border focus:border-solid focus:border-mainBlue focus:outline-none"
        />
      )}
    </div>
  );
}

export default TextInput;
