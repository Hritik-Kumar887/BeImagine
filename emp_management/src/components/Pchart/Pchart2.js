import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Pchart.css"
import { ApiCall, ApiCallDept } from '../../ApiCall';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Pchart2() {
    var departments = new Map([
        ["Production", 0],
        ["IT/IS", 0],
        ["Software Engineering", 0],
        ["Admin Offices", 0],
        ["Sales", 0],
        ["Executive Office", 0]
    ])

    // var ethnicity = new Map([
    //     ["White",0],
    //     ["Black or African American",0],
    //     ["Asian",0],
    //     ["Two or more races",0]
    // ])

    const [departmentData, setDepartmentData] = useState([]);
    const getEmps = () => {
        ApiCall().then(res => {
            console.log(res);
            setTotalEmp(res.data.length - 1);

            for (let i = 1; i < res.data.length; i++) {
                let val = departments.get(res.data[i].department);
                departments.set(res.data[i].department, val + 1);
            }
            console.log(Array.from(departments.values()));
            setDepartmentData(Array.from(departments.values()));
        })
    }
    const [totalEmp, setTotalEmp] = useState(0);

    useEffect(() => { getEmps() }, [])

    return (
        <>
            <div className='chartWrap'>
                <div>
                    <Pie
                        data={{
                            labels: ["Production", "IT/IS", "Software Engineering", "Admin Offices", "Sales", "Executive Office"],
                            datasets: [
                                {
                                    label: '# of departments',
                                    data: departmentData,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(10,100,72,0.3)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(10,100,72,1)'
                                    ],
                                    borderWidth: 1,
                                    offset: [0, 0, 0, 0, 0]
                                },
                            ],
                        }} />
                </div>
                <div>
                    <h3>Based on Department</h3>
                    <p>
                        Total Users : {totalEmp}<br />
                        Production : {departmentData[0]} <br />
                        IT/IS : {departmentData[1]} <br />
                        Software Engineering : {departmentData[2] } <br />
                        Admin Offices : {departmentData[3]} <br />
                        Sales : {departmentData[4]} <br />
                        Executive Office : {departmentData[5]} <br />
                    </p>
                </div>
            </div>
        </>
    )
}