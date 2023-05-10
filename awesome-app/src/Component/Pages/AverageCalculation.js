import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ArrowImage from '../../Images/Arrow_righ.png';

const TableData = () => {

  function handleChange(event) {
    let val = event.target.value;
    for (let i = 1; i <= 7; i++) {
      var party = document.getElementById("partysize" + i);
      party.innerHTML = val;

    }
    showdata()

  };
  function handleChangePartysize(event) {
    let val = event.target.value;
    let partyvalue = parseFloat(val).toFixed(2);
    for (let i = 1; i <= 7; i++) {
      var avg_cost = document.getElementById("avg_free_cost" + i);
      avg_cost.innerHTML = "$" + partyvalue;
    }
    showdata()
  }

  let val1_str = 0;
  let val2_str = 0;
  let val1 = 0;
  let val2 = 0;
  function showdata() {
    for (let i = 1; i <= 7; i++) {

      val1_str = document.getElementById("partysize" + i).innerHTML;
      val2_str = document.getElementById('avg_free_cost' + i).innerHTML;

      val1_str = val1_str.replace(/\$/g, "");
      val2_str = val2_str.replace(/\$/g, "");
      val1 = parseFloat(val1_str).toFixed(2);
      val2 = parseFloat(val2_str).toFixed(2);

      if (isNaN(val1) || isNaN(val2))
        return

      let val = (val1 * val2) / 2
      val = val.toFixed(2);
      document.getElementById('total_dining_savings' + i).innerHTML = '$' + val;
      let per_week_val = document.getElementById('per_week' + i).innerHTML;

      let val_dinning = val2 * per_week_val
      val_dinning = val_dinning.toFixed(2)
      document.getElementById("weekly_savings" + i).innerHTML = "<font size=3><strong class='text-right'>$" + val_dinning + "</strong></font>";


      let net_month_sving_val = parseFloat(val_dinning * 4 - 29.95).toFixed(2);
      document.getElementById("monthly_saving" + i).innerHTML = "<font size=3>$" + net_month_sving_val + "</font>";

    }
  }


  return (
    <>

      <br />
      <div id="BogomazingApp" className="about-area spc-small">
      <h2 id="" className="text-center fs-1 fw-bolder style-heading">Welcome to</h2>
      <h3 className="text-center fs-3 fw-bolder ">BOGOMAZING APP</h3>

      <br />
      <br />
      <Container>
        <Table responsive bordered hover className='styled-table text-center'>
          <thead>
            <tr>
              <th scope='col' className="dropdown-color">Select<br />Party Size<br />
                <img src={ArrowImage} alt="ArrowImage" />
              </th>
              <th scope='col' className="dropdown-color">
                <select id="lst_cost_per_drink" className="myselect  mb-3" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </th>
              <th scope='col' className="dropdown-color">
                <select className="myselect mb-3" id="lst_party_size" onChange={handleChangePartysize}>
                  <option value="0">Select</option>
                  <option value="20">$20.00</option>
                  <option value="25">$25.00</option>
                  <option value="30">$30.00</option>
                  <option value="35">$35.00</option>
                  <option value="40">$40.00</option>

                </select>
              </th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
            <tr>

              <th scope='col' className="dropdown-color">Uses Per
                Week</th>
              <th scope='col' >Average Party<br />Size<br /></th>
              <th scope='col'>Average FREE<br />Entrée Cost<br /></th>
              <th scope='col'>Total Dining<br />Savings<br /></th>
              <th scope='col' className="dropdown-color p-3">Weekly Savings</th>
              <th scope='col'>Net Monthly<br />Savings<br /></th>
            </tr>

          </thead>
          <tbody>
            <tr>

              <td className="dropdown-color" data-type="currency center"><span id="per_week1">2</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize1"></span></td>
              <td data-title="Worldwide Gross"  data-type="currency" ><span id="avg_free_cost1"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings1"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings1"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving1"></span></td>

            </tr>
            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week2">5</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize2"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost2"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings2"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings2"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving2"></span></td>
            </tr>


            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week3">10</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize3"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost3"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings3"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings3"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving3"></span></td>
            </tr>

            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week4">15</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize4"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost4"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings4"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings4"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving4"></span></td>
            </tr>
            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week5">20</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize5"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost5"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings5"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings5"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving5"></span></td>
            </tr>
            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week6">25</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize6"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost6"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings6"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings6"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving6"></span></td>
            </tr>
            <tr>
              <td className="dropdown-color" data-type="currency center"><span id="per_week7">30</span></td>
              <td data-title="Studio" data-type="currency center"><span id="partysize7"></span></td>
              <td data-title="Worldwide Gross" data-type="currency"><span id="avg_free_cost7"></span></td>
              <td data-title="Domestic Gross" data-type="currency"><span id="total_dining_savings7"></span></td>
              <td className="dropdown-color" data-title="International Gross" data-type="currency"><span id="weekly_savings7"></span></td>
              <td data-title="Budget" data-type="currency"><span id="monthly_saving7"></span></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>

    </>
  )
}


export default TableData;