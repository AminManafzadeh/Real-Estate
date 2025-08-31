import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const handleAdd = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const handleChange = (e, index) => {
    const list = [...profileData[type]];
    list[index] = e.target.value;
    setProfileData({ ...profileData, [type]: list });
  };

  const handleDelete = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-[5px]">{title}</p>
      {profileData[type]?.map((i, index) => (
        <div key={index} className="card">
          <input
            type="text"
            value={i}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => handleDelete(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button
        className="border-none bg-mainBlue text-mainWhite rounded-[5px] transition-all ease-in duration-100 cursor-pointer py-1 px-2 flex mt-5 hover:opacity-90"
        onClick={handleAdd}
      >
        افزودن <MdOutlineLibraryAdd className="mr-[5px] text-xl" />
      </button>
    </div>
  );
}

export default TextList;
