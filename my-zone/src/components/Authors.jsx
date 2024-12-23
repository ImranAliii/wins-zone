import React from "react";
import "./Authors.css";

const Authors = () => {
  return (
    <>
      <div
        className="container-fluid pb-5 pt-5"
        style={{ background: "#47663B" }} >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">Authors</h1>
            </div>
          </div>
          {/* row-1 */}

    
          <div className="row d-flex flex-md-row flex-sm-column mt-sm-4">
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3">B.C.</span>
            </div>

            <div className="col-sm-10 col-md-3">
              <h6 className="text-white">Brian X. Chen</h6>

              <span className="p-2 fw-semibold rounded hover-effect">
                #WearableComputing
              </span>
               
              <span className="p-1 fw-semibold rounded hover-effect mt-2">
                #MotorolaMobilityLLC
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-2">
                #OuraHealthOy
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">V.F.</span>
            </div>

            <div className="col-sm-10 col-md-3">
              <h6 className="text-white">Vanessa Friedman</h6>
              <span className="p-1 mx-2 fw-semibold rounded hover-effect">
              #AxiomSpaceInc
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-1 mx-2 ">
              #BertelliLorenzo
              </span>
              <span className="p-1 ml-3 mr-3 fw-semibold rounded hover-effect mt-3">
              #PradaSpA
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">D.G.</span>

            </div>
            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Dana Goldstein</h6>
              <span className="p-1 fw-semibold rounded hover-effect mx-1">
              #AmericanFederation
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-2">
              #NationalEducationAssn
            
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-2">
              
              #CharterSchools

              </span>
            </div>
          </div>

          {/* row-2 */}

          <div className="row d-flex flex-md-row flex-sm-column mt-4">
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3">K.R.</span>
            </div>

            <div className="col-sm-10 col-md-3 mt-1">
              <h6 className="text-white">Kaleigh Rogers</h6>

              <span className="p-1 fw-semibold rounded hover-effect">
              #FiveThirtyEightcom
              </span>

              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-1">

              #PassaicCountyNJ
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #OuraHealthOy
              </span>
            </div>
            <div className="col-sm-2 col-md-1 sm-mt-5">
              <span className="rounded-circle bg-white text-dark p-3">A.W.</span>
            </div>

            <div className="col-sm-10 col-md-3 mt-1">
              <h6 className="text-white">Alex Williams</h6>
              <span className="p-1 fw-semibold rounded hover-effect mx-0">
              #NakayamaMiho1970-2024
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #PaleyAndy1951-2024
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-1">
              #BeachBoys
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3">B.P.</span>

            </div>
            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Brad Plumer</h6>
              <span className="p-1 fw-semibold rounded hover-effect">
              #ShahJigar
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-2">
              #EnergyDepartment
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #BakuAzerbaijan
              </span>
            </div>
          </div>

          {/* row-3 */}
          <div className="row d-flex flex-md-row flex-sm-column mt-4">
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3">A.N.</span>
            </div>

            <div className="col-sm-10 col-md-3 mt-1">
              <h6 className="text-white">Amelia Nierenberg</h6>

              <span className="p-1 fw-semibold rounded hover-effect">
              #AmericanAirlines
              </span>

              <span className="p-1 fw-semibold rounded hover-effect mt-2 mx-1">
              #OxfordEngland
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-2 mx-2">
              #UnitedAirlines
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">S.S.</span>
            </div>

            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Shannon Sims</h6>
              <span className="p-1 fw-semibold rounded hover-effect">
              #AmericanRedCross
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-2">
              #GoBag
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 ">
              #FederalManagementAgency

              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">S.O.</span>

            </div>
            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Sharon Otterman</h6>
              <span className="p-1 fw-semibold rounded hover-effect">
              #InternationalStudy
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-2">
              #AmericaFirstPolicy
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #Zionism
              </span>
            </div>
          </div>

          {/* ROW-4 */}
          <div className="row d-flex flex-md-row flex-sm-column mt-1">
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">R.L</span>
            </div>

            <div className="col-sm-10 col-md-3">
              <h6 className="text-white">Ron Lieber</h6>

              <span className="p-1 fw-semibold rounded hover-effect mx-2">
              #AmericansAbroad
              </span>

              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #ExpenseAccounts
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #ConcurTechnologiesInc
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">S.M.</span>
            </div>

            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Sapna Maheshwari</h6>
              <span className="p-1 fw-semibold rounded hover-effect">
              #AppealsCourtsUS
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-2">
              #VoiceandSpeech
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #ScreenTimeDevice
              </span>
            </div>
            <div className="col-sm-2 col-md-1">
              <span className="rounded-circle bg-white text-dark p-3 mt-3">A.S.</span>

            </div>
            <div className="col-sm-10 col-md-3 mt-2">
              <h6 className="text-white">Ana Swanson</h6>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #OfficeoftheUnitedStates
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3 mx-2">
              #Embargoesand
              </span>
              <span className="p-1 fw-semibold rounded hover-effect mt-3">
              #HuaweiTechnologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
