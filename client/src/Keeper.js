import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
// import { Link } from 'react-router-dom'
import { Input } from 'antd';
import { FileAddOutlined, DeleteFilled } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios'
import { Typography } from 'antd';
import { toast, Toaster } from 'react-hot-toast'
import Ripples from 'react-ripples'



// const { TextArea } = Input;
const { Title } = Typography;

export const Keeper = () => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [getdata, setgetdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/getmemo")
            .then((resp) => {
                setgetdata(resp.data)
                console.log(resp.data);
            })
            .catch((err) => console.log(err))
    })


    const onChange = (event, props) => {
        if (props === 'title') settitle(event.target.value)
        else setdesc(event.target.value)
        // console.log(title, desc)
    };
    const submit = () => {
        if (title !== "" && desc !== "") {
            console.log("HI")
            axios.post("http://localhost:8000/api/addmemo", { title, desc });
            settitle('')
            setdesc('')
            toast.success('Memo added')
        }
        else {
            toast.error('Empty field cannot be added')
        }


    }

    const deletefunc = (_id) => {
        console.log(_id)
        axios.delete(`http://localhost:8000/api/deletememo/${_id}`,)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='keeper'>
            <h1>The Keeper App</h1>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex'>
                <Card
                    className='card'
                    // title="Default size card"
                    // extra={<Link to="/keeper">More</Link>}
                    style={{
                        width: 300,
                        backgroundColor: "#000000",
                        color: "#ffffff"
                    }}
                >
                    <Input value={title} className='inputtitle' placeholder="Add Title" allowClear onChange={(event) => onChange(event, 'title')} />
                    <br /><br />
                    <Input value={desc} className='inputdesc' placeholder="Add Description" allowClear onChange={(event) => onChange(event, 'desc')} />
                    <br />
                    <br />
                    <div className='submitbutton'>
                        <Ripples>
                            <Button onClick={submit} className='submit' shape="round" icon={< FileAddOutlined />} size='large'>
                                Add
                            </Button>
                        </Ripples>
                    </div>
                </Card >
            </div >
            <div>
                <br /><br />
                <div className='flex'>
                    {
                        getdata.map((element, key) => {
                            return (
                                <Card
                                    key={key}
                                    className='card cardmargin'
                                    // title="Default size card"
                                    // extra={<Link to="/keeper">More</Link>}
                                    style={{
                                        width: 300,
                                        backgroundColor: "#000000",
                                        color: "#ffffff"
                                    }}
                                >
                                    <div style={{ flexWrap: "nowrap", justifyContent: "space-between" }} className='flex'>
                                        <Title style={{ color: "#27b0b8" }} level={2}>{element.title}</Title>
                                        <Button className='deleteIcon' onClick={() => deletefunc(element._id)} style={{ color: "gray" }} shape="circle" icon={<DeleteFilled />} />
                                    </div>
                                    <ul>
                                        <li style={{ fontSize: "18px", color: "#69b1b5" }}>{element.desc}</li>
                                    </ul>

                                </Card>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

