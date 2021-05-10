import React, { FC, useState } from 'react';
import { questionPropsType } from './../Types/quize_type';
const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    let [selectedans, setselectedand] = useState("");
    const handelselection = (ev: any) => {
        setselectedand(ev.target.value)
    }
    return (
        <div className="question_Container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedans)} className="question-form">
                {
                    options.map((opt: string, ind: number) => {
                        return (

                            <div key={ind}>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        name="opt"
                                        checked={selectedans===opt}
                                        value={opt}

                                        required onChange={handelselection} />
                                    {opt}

                                </label>
                            </div>

                        )
                    })
                }
                <input type="submit" className="submit" />
            </form>
        </div>
    )
}
export default QuestionCard;