import { useState } from "react";

const FAQs = () => {
  const [Questions, setQuestions] = useState({
    1: {
      groupName: "PRODUCT INFO",
      questions: [
        {
          question: "CAN I GO ON THE MOON FOR FREE?",
          answer: "No, you can not go to the moon for free.",
          isShown: false,
        },
        {
          question: "CAN I GO ON THE MOON FOR FREE?",
          answer: "No, you can not go to the moon for free.",
          isShown: false,
        },
      ],
    },
  });

  console.log(Questions);

  return (
    <div className="relative p-10 w-full h-full flex items-center justify-center">
      <div className="w-full lg:w-4/6 p-5 flex flex-col gap-3">
        <div className="text-5xl font-bold">FAQ&apos;s</div>

        {Questions &&
          Object.values(Questions).map((g, p) => (
            <div key={p}>
              <div className="text-3xl font-bold">{g.groupName}</div>
              <div className="flex flex-col gap-1 cursor-pointer text-2xl">
                {g.questions.map((q, i) => (
                  <div
                    key={`question` + i}
                    className="flex flex-col border-t-2 border-primary pt-2 pb-2 box-border"
                    // onClick={() => {
                    //   setQuestions((state) => ({
                    //     ...state,
                    //     [p + 1]["questions"][i + 1]: {
                    //       question: q.question,
                    //       answer: q.answer,
                    //       isShown: !q.isShown,
                    //     },
                    //   }));
                    // }}
                  >
                    <div className="flex justify-between">
                      <div>{q.question}</div>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    <div
                      className={`text-sm ${
                        q.isShown == true ? "block" : "hidden"
                      }`}
                    >
                      {q.answer}
                    </div>
                    <div>{i}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        {/* <div className="text-3xl font-bold">PRODUCT INFO</div>
        <div className="flex flex-col gap-1 cursor-pointer text-2xl">
          <div className="flex flex-col border-t-2 border-primary pt-2 pb-2 box-border">
            <div className="flex justify-between">
              <div>CAN I GO ON THE MOON FOR FREE?</div>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="text-sm hidden">
              No, you can not go to the moon for free.
            </div>
          </div>
          <div className="flex flex-col border-t-2 border-primary pt-2 pb-2 box-border">
            <div className="flex justify-between">
              <div>CAN I GO ON THE MOON FOR FREE?</div>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="text-sm hidden">
              No, you can not go to the moon for free.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQs;
