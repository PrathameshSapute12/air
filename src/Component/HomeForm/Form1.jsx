import React from 'react';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Form1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';



const Form1 = () => {
    const [key, setKey] = useState('home');
    const [data1, setdata1] = useState("");

    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const [datte, setdatte] = useState("");
    const [adult, setadult] = useState(0);
    const [type, settype] = useState("");
    const [dataa, setdataa] = useState([]);

    

    return (
        <Container className='form-container'>
            <Row>
                <Col lg={6}>
                    < div className='navdiv'>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <form action="">
                                    <div>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="Round-trip" onClick={() => setdata1("")} control={<Radio />} label="Round-trip" />
                                                <FormControlLabel value="One-Way" onClick={() => setdata1("hidden")} control={<Radio />} label="One-way" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div>
                                        <TextField required id="standard-basic1" onChange={(e) => setfrom(e.target.value)} label="FROM" variant="standard" value={from} />
                                        <TextField required id="standard-basic2" onChange={(e) => setto(e.target.value)} label="TO" variant="standard" value={to} />
                                    </div>
                                    <br />
                                    <div>
                                        <TextField id="standard-basic4" label=" " sx={{ width: 200 }} type='Date' variant="standard" onChange={(e) => setdatte(e.target.value)} value={datte} />
                                        <TextField style={{ visibility: `${data1}` }} sx={{ width: 200 }} id="standard-basic3" label=" " type='Date' variant="standard" />
                                    </div>
                                    <br />
                                    <div>

                                        <TextField required id="standard-basic2" label="Travellers" type='Number' variant="standard" onChange={(e) => setadult(e.target.value)} value={adult} />
                                    </div>
                                    <br /><br />
                                    <div>
                                        <Select
                                            placeholder="Select Class"
                                            sx={{ width: 240 }}
                                            slotProps={{
                                                listbox: {
                                                    placement: 'bottom-start',
                                                },
                                            }}
                                            onChange={(e) => settype(e.target.value)}
                                        >
                                            <Option value="Economy">
                                                Economy
                                            </Option>
                                            <Option value="Premium Economy">
                                                Premium Economy
                                            </Option>
                                            <Option value="Buisness or First">
                                                Buisness or First
                                            </Option>
                                        </Select>
                                    </div>
                                    <br /><br />
                                    <div className='button-class'>
                                        <Button type="submit">Submit form</Button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <form action="">
                                    <h3 id='Form2-heading'> Flight Status</h3>
                                    <br />
                                    <div>
                                        <TextField required id="standard-basic1" label="FROM" variant="standard" />
                                        <TextField required id="standard-basic2" label="TO" variant="standard" />
                                    </div>
                                    <br /><br />
                                    <div>
                                        <TextField id="standard-basic2" label="FlightNo." variant="standard" />
                                        <TextField id="standard-basic2" label="  " type='Date' variant="standard" />




                                    </div>
                                    <br /><br />

                                    <div className='button-class'>
                                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                            <Button variant="soft" type='Submit'>Search</Button>
                                        </Box>
                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </div >
                </Col>
            </Row>
        </Container>
    )
}

export default Form1
