import React, { useState } from 'react'

const OnlineOfline = (props) => {
    const listData = props.coworkers;

    const [status, setStatus] = useState("online");
    const [status1, setStatus1] = useState("online");
    const [status2, setStatus2] = useState("online");

    const HandleClick = (index) => {

        if (index === 0) {
            if (status === "online") {
                setStatus("offline")
            } else if (status === "offline") {
                setStatus("online")
            }
        } else if (index === 1) {
            if (status1 === "online") {
                setStatus1("offline")
            } else if (status1 === "offline") {
                setStatus1("online")
            }
        }
        else if (index === 2) {
            if (status2 === "online") {
                setStatus2("offline")
            } else if (status2 === "offline") {
                setStatus2("online")
            }
        }
    }
    return (
        <>
            <div>
                {
                    listData && listData.map((item, index) => {
                            return (
                                <>
                                    <label>
                                        {`${item.first_name} 
                                        ${item.last_name} `}
                                    {
                                        index === 0 ? status  : null
                                    }
                                    {
                                        index === 1 ? status1  : null
                                    }
                                    {
                                        index === 2 ? status2  : null
                                    }

                                    </label>

                                    <button onClick={() => HandleClick(index)}>
                                        {index=== 0 ? status === "online" ? "offline" : "online" : null}
                                        {index=== 1 ? status1 === "online" ? "offline" : "online" : null}
                                        {index=== 2 ? status2 === "online" ? "offline" : "online" : null}
                                        </button>
                                    <br/>
                                </>
                            )
                    })
                }
            </div>
        </>
    )
}
OnlineOfline.defaultProps = {
    coworkers: [
        { first_name: "Max", last_name: "Mustermann" },
        { first_name: "Vladimir", last_name: "Leles" },
        { first_name: "Tobias", last_name: "Anhalt" }
    ]
};
export default OnlineOfline