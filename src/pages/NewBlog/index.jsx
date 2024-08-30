import { useState } from "react";

function NewBlog() {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/oldestBlogs", {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                title,
                details,
                date
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            // setNewBlogs([...newBlogs, data]);
        })
    }

    return (
        <>
            <form action="" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={handleTitleChange} />
                </div>
                <br />
                <div className="input-group">
                    <label htmlFor="details">Details</label>
                    <textarea name="details" id="" value={details} onChange={handleDetailsChange}></textarea>
                </div>
                <br />
                <div className="input-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={date} onChange={handleDateChange} />
                </div>

                <input type="submit" />
            </form>
        </>
    )
}

export default NewBlog;