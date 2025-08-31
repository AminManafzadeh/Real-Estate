function ItemList({ data }) {
  return (
    <div className="text-justify mb-[50px]">
      {data.length ? (
        <ul className="pr-5 mb-[50px]">
          {data?.map((item, index) => (
            <li className="marker:text-mainBlue" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
