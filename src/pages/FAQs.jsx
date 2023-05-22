import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import NavTab from '../components/NavTab';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import logo from '../assets/logo.png'
import Footer from '../components/Footer';

const FAQs = () => {

    const faqs = [
        


    ]

    const [position, setPosition] = useState("-91px")
    const [openNav, setOpenNav] = useState(false);
    const [comp, setComp] = useState(false)
    const [info, setInfo] = useState([
        { id: 1, open: true,  question: "Why Choose Us", answer: "MetaForeignOptions Incoporated An Impressive Records Of Successful Trades, High Revenue Margin, Trained Experts, MetaForeignOptions Limited Is Regulated By Various Securities And Exchange Commission , Licensed By The Liabilities Trade Security (LTS) Of South Africa In Africa And London In The United Kingdom, With LTS No. LTS-010839223. The Company Is Also Registered With The Financial Conduct Authority Of The UK All Its Trading Is Conducted Under Strict Regulatory Supervision Financial Stability Financial stability is one of the most widely discussed issues in today’s ", },
        
        { id: 2, open: false, question:"HOW DO I EARN THROUGH MetaForeignOptions?", answer:"First Of All, Register Yourself At MetaForeignOption.COM . We Offer A High Profit Trading Plan To Our Clients - Users Earn 25% Daily Profits (Excluding Saturdays And Sundays) From Weekly, Monthly, Quaterly And Yearly Plans On Any Capital Investment Equivalent To $500 And Above. You Can Subscribe To More Than One Active Plan At A Time. Now On Behalf Of You, Our Company Specialists Invests Your Fund In Our Trading Firm. We Have Specialized Artificial Intelligence Bots Extensively Built By Experts With Cognitive Knowledge In Different Financial Markets For Profitable Trading. You Do Not Have To Worry About Trading On Your Own And Software Setup Or Any Maintenance Cost. We Do It For You. We Are Committed To Return Your Investments As Per Numbers Of Trading Plan Purchased By You, 25% Daily Profit (Excluding Saturdays And Sundays) As Per The Selected Investement Plan. MetaForeignOption Accepts And Returns Payments In Bank Transfer, Perfect Money, Bitcoin, Etheruem Etc And With The Returns You Can Subscribe To More Trading Plans Or Withdraw And Sell Your Bitcoins To Enjoy Your Profit.",  },
        
        { id: 3, open: false, question: "WHERE WILL I RECIEVE THE INTEREST OF MY ACTIVE DEPOSITS?", answer: "All Users Operating A Trade Account, Get Profits Instantly As Our AI Processes Trade The Outcome Of The Trade Is Shown In Your Trade Account. Additional Profits Maybe Earn At The End Of A Users Trading Period, All Users Are Expected To Stay Online As Much As They Can To Watch Their Trade And Also Make Changes When Neccessary.", },
        
        { id: 4, open: false, question: "HOW LONG DOES IT TAKES FOR MY DEPOSIT TO REFLECT IN MY ACCOUNTS", answer: "metaforeign.com Offers Multiple Deposit Methods And Their Processing Times Differ. Bitcoin Funding Reflects Within An Hour, Bank Wire May Extend More Than A Day Depending On The Country. After Funding Your Account, Please Contact Our Agents Via Our The Whatsapp Button Or Our Live Chat App Or Send A Mail To SUPPORT@metaforeign.com", },
        
        { id: 5, open: false, question: "HOW DO I REGISTER WITH metaforeignoptions.com", answer: "Opening An Account With Us Is Very Easy, Just Fill-In The Registration Form With Your Correct Details And Submit To Create An Account. You Can Register By Clicking <a>REGISTER NOW</a> If You Encounter Any Problems While Opening An Account, Please Contact Our Support Team At Support@metaforeignOptions.com Or Open A Conversation Via The Chat Medium Found On Our Website", },
        
        { id: 6, open: false, question: "HOW LONG DOES IT TAKES FOR MY TRADING TO START AFTER MAKING DEPOSIT?", answer: "Your Trade Account Will Start Trading Immediately After Your Deposit Is Confirmed And Approved.", },
    ])
    
   
    const handleToggleComp = () => {
        
        
        setComp(!comp);
    }

    window.addEventListener("scroll", handleNav)

    function handleNav() {
        let y = window.pageYOffset;

        if (y >= 90) {
            setPosition("-0px");
        } else if (y > 0) {
            setPosition("-90px");
        } 
    } 

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    }

    const handleOpenFaq = (e) => {
        setInfo(info.map(item => {
            if (parseInt(e.target.id) === item.id) {
                return {
                    ...item, open: !item.open
                }
                // console.log(item.open)
            }
            return item;
        }))

        console.log(e.target.id);
    }


  return (
      <div>
          <div style={{left: openNav === true ? "0%" : "-100%"}} className="hr-nav">
              <div className="hnv-top">
                  <a href='http://metaforeignoptions.com' ><div className="hnv-logo">
                      <img src={logo} alt="logo.png"/>
                  </div></a>
                  <Icon onClick={handleToggleNav} className='hnv-icon' icon="ep:close-bold" />
              </div>
              <div className="hnv-links">
                  <div className="hnv-links-wrap">
                      <a href="http://metaforeignoptions.com"><div className="hnv-link-tab">
                          <p>Home</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>
                      {/* <div className="hnv-link-cont">
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                          <p><a href="#">Home 1</a></p>
                      </div> */}
                  </div>
                  <div className="hnv-links-wrap">
                      <Link to="/education" ><div className="hnv-link-tab">
                          <p>Education</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <div className="hnv-link-tab">
                          <p>Company</p>
                          <Icon onClick={handleToggleComp} style={{ transform: comp === true ? "rotateZ(90deg)" : "rotateZ(0deg)" }} className='hnv-tab-icon' icon="bxs:chevron-right" />
                      </div>
                      <div className="hnv-link-cont" style={{height: comp === true ? "80px" : "0px"}} >
                          <Link to="/faqs" ><p>FAQs</p></Link>
                          <Link to="/terms"><p>Legal Docs</p></Link>
                      </div>
                  </div>
                  <div className="hnv-links-wrap">
                      <Link to='/contact-us'><div className="hnv-link-tab">
                          <p>Contact Us</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <Link to='/about-us'><div className="hnv-link-tab">
                          <p>About Us</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></Link>

                  </div>
                  <div className="hnv-links-wrap">
                      <a href="https://metaforeignoptions.com/views/login.php"><div className="hnv-link-tab">
                          <p>Login</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>

                  </div>
                  <div className="hnv-links-wrap">
                      <a href="https://metaforeignoptions.com/views/signup.php"><div className="hnv-link-tab">
                          <p>Sign Up</p>
                          {/* <Icon className='hnv-tab-icon' icon="bxs:chevron-right" /> */}
                      </div></a>

                  </div>
                  {/* <div className="hnv-links-wrap">
                      <a className='whatsapp hup-flex' href="https://wa.me/message/ZVCCF54HRKLFP1" target="blank" ><Icon className='icon' icon="logos:whatsapp-icon" /> WhatsApp</a>

                  </div> */}
                  
              </div>
            </div>
          <div onClick={handleToggleNav} style={{left: openNav === true ? "0%" : "-100%"}} className="hr-overlay"></div>
          <Navbar position={position} />
          <TopBar />
          <div className="contact">
                           <div className="hr-top">
                      <a href='http://metaforeignoptions.com' ><div className="hr-logo">
                          <img src={logo} alt="" />
                      </div></a>
                      <div className="hr-links-updates">
                          <div className="hr-links">
                                 <a href="http://metaforeignoptions.com"><NavTab desc="Home" /> </a>
                                 {/* <NavTab desc="Markets" />  */}
                                 <Link to="/education"><NavTab desc="Education" /> </Link>
                                 <div className='hr-comp'>
                                    <NavTab desc="Company" icon={<Icon className='icn' icon="ion:chevron-down-outline" />} /> 
                                    <div className="hr-comp-list">
                                        <Link to="/about-us" >About Us</Link>
                                        <Link to="/contact-us" >Contact Us</Link>
                                        <Link to="/terms" >Legal Docs</Link>
                                        <Link to="/faqs" >FAQs</Link>
                                    </div>
                                 </div>
                                 {/* <NavTab desc="Register" />  */}
                                 
                                 <a href="http://Metaforeignoptions.com/views/login.php"><NavTab desc="Login" /> </a>
                                 <a href="http://Metaforeignoptions.com/views/signup.php"><NavTab desc="Signup" /> </a>
                          </div>
                          <div className="hr-updates">
                              <p className='hup-1'>Trading involves substantial risk and may result in the loss of your invested/greater that your invested capital, respectively.</p>
                              {/* <a href="https://wa.me/message/ZVCCF54HRKLFP1" target="blank" ><p className='hup-flex'><Icon className='icon' icon="logos:whatsapp-icon" /> WhatsApp </p></a> */}
                              <p className='hup-flex'><Icon className='icon' icon="ion:chatbox" /> LIVE CHAT </p>
                              <p className='hup-flex'><Icon className='icon' icon="ic:baseline-phone" /> +1 (929) 464-5936</p>
                          </div>
                      </div>
                      <div className="hr-burger">
                          <Icon onClick={handleToggleNav} className=' burg-icon' icon="heroicons-solid:menu-alt-3" />
                      </div>
                  </div>
          </div>
          <div className="contact-us">
              <div className="nav-container">
                <div className="cu">
                    <h1>Company FAQs</h1>
                    <p>Please Contact Support For Any Other Question.</p>
                </div>
                  <div className='faq-cont'>
                      {
                          info && info.map(faq => (
                              <div key={faq.id} >
                                  <div  id={faq.id} onClick={handleOpenFaq} className='faq-header' style={{}}>
                                      <h4>{ faq.question }</h4>
                                      <Icon className='faq-icon' icon="mdi:chevron-down" />
                                  </div>
                                  <div className="faq-content" style={{height: faq.open === true ? "80px" : "0px", padding: faq.open === true ? "10px" : "0px"}} >
                                      <p> {faq.answer} </p>
                                  </div>
                              </div>
                          ))
                      }
                      
                </div>
                
                  
              </div>
          </div>
          <Footer/>
          
    </div>
  )
}

export default FAQs