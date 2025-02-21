const List = ({ data, count = 0 }) => {
  return (
    <ul className="flex flex-col gap-4 list-outside">
      {data
        ? data.map((item, index) => {
            count++;
            return (
              <li key={index} className="flex flex-col gap-4">
                <h4>
                  {count}
                  {")"} {item.heading}
                </h4>
                {item.description ? <p>{item.description}</p> : ""}

                {item.points
                  ? item.points.map((text, subindex) => (
                      <p key={text}>
                        {count}.{subindex + 1}) {text}
                      </p>
                    ))
                  : ""}
              </li>
            );
          })
        : ""}
    </ul>
  );
};

export default List;
