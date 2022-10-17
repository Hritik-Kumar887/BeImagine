import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import "./Pchart.css"
import { ApiCall, ApiCallGender } from '../../ApiCall';

ChartJS.register(ArcElement, Tooltip, Legend);

// const emp_api = "https://script.google.com/macros/s/AKfycbyLQ-2x3Bg7yj_E-B_OmFWNcM_Ek2RbhlJVlbDxKeB_KbuP2YU6YY12_82pg7-eZCLc2w/exec";

export function Pchart() {

  const [totalEmp, setTotalEmp] = useState(0);
  const [males, setMales] = useState(0);

  // useEffect(() => { data.datasets[0].data = [males, totalEmp - males]; data={...data} }, [males]);

  const getEmps = () => {
    ApiCall().then(res => {
      console.log(res);
      setTotalEmp(res.data.length - 1);
    })
    ApiCallGender("M").then(res => {
      console.log(res);
      setMales(res.data.length);
    })
  }

  useEffect(() => { getEmps() }, [])
  return (
    <>
      <div className='chartWrap'>
        <div>
          <Pie
            data={{
              labels: ['Male', 'Female'],
              datasets: [
                {
                  label: '# of gender',
                  data: [males,totalEmp-males],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            }} />
        </div>
        <div>
          <h3>Based on Gender</h3>
          <p>
            Total Users : {totalEmp}<br />
            Male : {males} <br />
            Female : {totalEmp - males} <br />
          </p>
        </div>
      </div>

      {/* <div className='chartWrap'>
        <div>
          <Doughnut data={data} />
        </div>
        <div>
          <h3>Based on Gender</h3>
          <p>
            Total Users : {totalEmp}<br />
            Male : {males} <br />
            Female : {totalEmp-males} <br />
          </p>
        </div>
      </div> */}
    </>
  )
}