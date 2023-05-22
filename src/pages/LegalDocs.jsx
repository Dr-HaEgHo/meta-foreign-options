import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Icon} from '@iconify/react'
import NavTab from '../components/NavTab';
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


const LegalDocs = () => {

    const tabs = [
        {id: 1, title: "Privacy Policy"},
        {id: 2, title: "Terms of Service"},
    ]

    const [position, setPosition] = useState("-91px")
    const [openNav, setOpenNav] = useState(false);
    const [comp, setComp] = useState(false)
    const [tabName, setTabName] = useState("Privacy Policy")

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

    const tabHandler = (e) => {
        setTabName(e.target.textContent)
        // console.log(e.target.textContent);
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
                              <p className='hup-flex'><Icon className='icon' icon="ic:baseline-phone" />  +1 (929) 464-5936</p>
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
                    <h1>Our Terms & Conditions</h1>
                      {
                          tabName === "Privacy Policy" ? <p>Find out more about what information we collect at MetaForeignOptions, how we use it, and what control you have over your data.</p> : 
                              <p>Read the Terms of Service and License Agreement for all MetaForeignOptions clients & Investors.</p>
                    }
                    
                </div>
                  <div className='term-container'>
                      <div className="term-top">
                          {
                              tabs && tabs.map(tab => (
                                  <div key={tab.id} onClick={tabHandler} className={ tabName === tab.title ? "term-tab-on" : "term-tab" }>{ tab.title }</div>
                              ))
                          }
                      </div>
                      <div className="term-bottom">
                          { tabName === "Privacy Policy" ? 
                           (<div className="term-bottom-content">
                            <h2>Privacy Policy</h2>
                            <p>
                                The privacy of our website visitors and clients, both existing and former, is very important to us. MetaForeignOptions is committed to safeguarding any information we collect, use and hold about you.
                                When you register for either a demo or a live account with MetaForeignOptions, it is necessary that we collect some personal data from you for business purposes. By understanding your financial needs, we can treat you fairly as a client; we can provide you with the most suitable products and services, give you the appropriate information on investment strategies, process your requests and transactions and offer you both sales and post-sales services.
                                We request the following Personal Data from you:
                                Personal and financial information needed during the online registration applications/forms; Documents needed as proof of your identity and residency such as an International Passport, National ID, utility bills or bank statements; Please note that if and when you choose to end your working relationship with MetaForeignOptions, we must keep your Personal Data on record for a further seven years.
                            </p>
                            <h3>Personal Data:</h3>
                            <p>To verify your identity To ensure that you meet the suitability requirements needed to use our products and services</p>
                            <ul>
                                <li>To verify your identity.</li>
                                <li>To ensure that you meet the suitability requirements needed to use our products and services.</li>
                            </ul>
                            <p>To manage the account, you have with us and To process your transactions</p>
                            <ul>
                                <li>Client places a funds withdrawal order using the Company website interface. Company is not responsible for any third party access to the Client personal information and withdrawal orders. Once an order has been received, the withdrawal amount may be deducted from the Client trading account.</li>
                                <li>To send you information about transaction/post-transaction services.</li>
                                <li>To keep you updated with news on our products, services and any other information relevant to your working relationship with MetaForeignOptions.</li>
                                <li>For the analysis of statistical data which will help us provide you with better products and services in the future.</li>  
                            </ul>
                            <h3>Cookies</h3>
                            <p>Cookies are small bits of data stored on a web browser when you visit a website for the first time. If you visit that website again in the future, the storage of cookies on your browser enables the website to remember how you browsed through it the first time. For example, it can remember your username and password. Cookies are used on this website in order to offer our users a more customized browsing experience. <br /> If you do not agree to our Cookie Policy you can disable Cookies and still access our website normally.</p>
                            <h3>Security & Protection</h3>
                            <p>MetaForeignOptions is committed to safeguarding your Personal Data by adhering to strict security standards and using the most up to date security technologies.</p>
                          </div> ) :
                              
                          (<div className="term-bottom-content">
                            <h2>Terms & Conditions</h2>
                            
                            <h3>1. General Terms</h3>
                            <p>
                                This contract explains the use of various conditions applied to the services available on MetaForeignOptions (henceforth “Our site “). Please feel free to use the customer support Live Chat on our site or to contact us by e-mail whenever you have a question.
                                Our web site is accessible worldwide to anyone with Internet access. Access and use of our site are subject to these terms and conditions.
                                BY USING AND ACCESSING OUR WEB SITE, YOU ACCEPT, WITHOUT LIMITATION, ALL OF THESE TERMS AND CONDITIONS
                                We reserve the right to change these terms and conditions at any time. Change of these Terms & conditions will occur by mere posting of a new and modified version of these terms and conditions on our web site. By using our web site, you agree in advance that each use will be subject to the then applicable Terms & conditions.
                                By using our web site you accept its Terms & conditions and Privacy Statement set forth below. If you do not agree with these policies, discontinue using this site immediately.

                                  All conversion losses are at your own expense. Additionally, you can open an account in USD, EUR or GBP, and your account’s currency is automatically determined according to your country IP.
                            </p>
                           
                            <h3>2. Online Services Agreement</h3>
                            <p>
                                This Agreement is made by and between our site and you.
                                This Agreement applies to both the Site and trading platform, and to the electronic content and / or software currently contained on the Site that provides the customers with real-time information on exchange rates of currencies, and the program transaction services on the forex market via internet, telephone or fax, and any other features, content or services that our site may add later (the “Services”).
                            </p>
                            
                            <h3>3. Membership Eligibility</h3>
                            <p>
                                Services are available and reserved only for individuals or businesses that can establish a legally binding contract under the laws applicable in their country of residence. Without limiting the undermentioned terms, our Services are not available to people aged under 18 or who have not attained the legal age (“Minors”). If you are a minor, you cannot use this service. PLEASE DO NOT USE THIS SITE IF YOU ARE NOT QUALIFIED.
                                To avoid any doubt, we disclaim any liability for unauthorized use by minors of our Services in any manner or another. In addition, our Services are available only for people who have experience and sufficient knowledge in financial matters, able to evaluate the benefits and risks of acquiring financial contracts via this site. You are solely responsible for any decision and / or made by you based on the content of the Site.
                                Without derogating from the above-mentioned provision, we disclaim any responsibility for auditing and/or checking your level of knowledge and/or experience, and any liability for damages and/or loss suffered as a direct result and/or indirectly from your use of the Site. It is the same for any transaction and/or use of the Services. Without limiting the above-mentioned provisions, our Services are not available in areas where their use is illegal and our site reserves the right to refuse and/or cancel access to its Services to anyone at its sole convenience.
                            </p>
                            
                              <h3>4. Registration Information and Requirements</h3>
                            <p>
                               When registering, you’ll have to provide certain identifying information. You are responsible for the security of your account’s login and password with our site. You are solely responsible for any damage caused by reason of any act or omission resulting in improper or illegal use of your account.
                               You agree to provide accurate and complete information about yourself during the registration process and you also agree not to impersonate another person or entity, and not to hide your identity from our site for any reason whatsoever. If you register as a commercial entity, you declare that you have the required authority to bind that entity to this Agreement.
                               Our site treats carefully the information you provide to us according to the disclosure of information provided during the registration process and privacy policy.
                            </p>
                            
                              <h3>5. Legal Restrictions</h3>
                            <p>
                               Without limiting the undermentioned provisions, you understand that laws regarding financial contracts vary throughout the world, and it is your responsibility to make sure you properly comply with any law, regulation or guideline in your country of residence regarding the use of the Site. To avoid any doubt, the ability to access our Site does not necessarily mean that our Services and/or your activities through the Site are legal under the laws, regulations or directives relevant to your country of residence. You hereby declare that the money in your account with our site did not originate from drug trafficking, kidnapping or other illegal or criminal activity.
                            </p>
                            
                              <h3>6. Limited License</h3>
                            <p>
                               Our site grants you a limited non-exclusive, non-transferable license to access and use the Site (the “License”). The license is subject to your compliance with the terms of this Agreement. You agree not to resell or make available the Site to any other person, and will not copy any documents contained on the Site for resale or for any other purpose without the prior written consent of our site. To avoid any doubt, you will be liable and bound by any unauthorized use of the Site, in violation of this section. You agree to use all the information received from our site’s information systems for the sole purpose of performing transactions in the only limits of the Site.
                                You also agree not to use electronic communication feature of a Service on the Site for any illegal, abusive, intrusive, obscene, threatening or hateful purpose, as well as harassment and vilification in the privacy of others. The license granted hereunder shall terminate if our site considers that any information provided by you, including your e-mail is no longer current or accurate, or if you fail to comply with any term or condition of This Agreement and all rules and guidelines for each service. It will be the same if our site determines that you’ve committed a crime on our site trading platform (including without limitation the conclusion of a transaction outside the market rates).
                                If such a violation occurs, you agree to cease accessing the Services. You agree that our site, in its sole discretion and with or without notice, may terminate your access to all or part of the Services, close any open transaction and remove and discard any information or content within a Service.
                            </p>
                            

                              <h3>7. Financial Information </h3>
                            <p>
                               
                               Through one or more of its Services, our site can make available to you a wide range of financial information that is generated internally from agents, suppliers or partners (“Third Party Providers”). This includes, but is not limited to financial market data, quotes and news, analyst opinions and research reports, graphs and data (“Financial Information”). The financial information provided on this Site is not an intentional investment advice. Our site offers financial information only as a service. Our site and its Third Party Providers do not warrant the accuracy, timeliness, completeness or correct sequencing of the financial information, or results of your use of this financial information. The financial information may promptly become unreliable for various reasons, including, for instance, changes in market conditions or economic circumstances. Neither our site nor the Third Party Providers are required to update the information or opinions included in the financial information, and we can interrupt the flow of financial information at any time without notice.
                               It is your responsibility to verify the reliability of the information on the Site and its suitability for your needs. We exclude all liability for any claim, damage or loss of any kind caused by information contained in the Site or referenced by the Site.
                            </p>
                           
                              <h3>8. Links </h3>
                            <p>
                               Our site may offer a link to other websites that are provided or controlled by third parties. Such link to a site or sites is neither an endorsement or an approval nor a sponsorship or an affiliation to such site, its owners or its suppliers. Our site recommends you to make sure you understand the risks associated with the use of such sites before retrieving, using or purchasing via the Internet. Links to these sites are provided solely for your convenience and you agree not to hold our site responsible for any loss or damage due to the use or reliance on any content, products or services available on other sites.
                            </p>
                           
                              <h3>9. Trading Cancellation </h3>
                            <p>
                               
                               Our site reserves the right in its sole discretion, to refuse or cancel services, and/or refuse to distribute profits to any person for legitimate reasons, including, without limitation:
                               
                                  <ol>
                                      <li>If our site has a reason to believe that a person’s activities on the Site may be illegal;</li>
                                      <li>If our site may be harmed by any fiscal or pecuniary damage due to anyone’s activities;</li>
                                      <li>If our site considers that one or more operations on the Site were made in violation of this Agreement.</li>
                                      

                               </ol>
                            </p>
                              
                              <h3>10. Payment Procedure </h3>
                            <p>
                               
                               Our site’s finance department supervises every withdrawal request submitted.
                               When a withdrawal request is submitted, our site may take up to 2-5 business days to process the request. When your application is approved please wait for 1 additional day before seeing your funds in your account..
                            </p>
                           
                              <h3>11. Credit Bonus </h3>
                            <p>
                                Our site provides attractive reward features to its new and existing clients. Credit Bonuses are part of our site promotional programs. These bonuses can be time-limited, while their conditions might be subject to change. When a Credit Bonus promotion is active, the bonus is given immediately, and can be solely used as additional leverage.

The Credit Bonus has no expiration date, and several Credit Bonuses can be summed up, thus being used simultaneously. This type of Bonus carries no restriction on profits, the client having the possibility to withdraw at any given moment.

Any indication of fraud, manipulation, cash arbitrage or other forms of deceptive or fraudulent activity based on the provision of the bonus, might lead to it being removed as a whole or in part. It can even lead to the account being nullified, while any profits or losses collected will be invalidated.
                            </p>
                              
                              <h3>12. Limited Liability </h3>
                            <p>
                                Our Site is committed to ensure continuity of the Services on the Site. However, our site assumes no responsibility for any error, omission, deletion, interruption, delay, defect, in operation or transmission, communications line failure, theft or destruction or unauthorized access or alteration of the Site or Services. The Site declines responsibility for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, hardware or software, or any technical failure because of technical problems or traffic congestion on the Internet, the Site or any Service.
To the extent permitted by applicable law, in no event shall we be liable for any loss or damage arising from use of the Site or Services for any content posted on or through the Site or Services, or the conduct of all users of the Site or Services, whether online or offline.
In no event shall the Company or any of its directors, officers, employees or agents be liable for any damages whatsoever to you, including, without limitation, indirect, incidental, consequential or punitive damages arising out of or related to the use of the Site or the Services, including, without limitation, the quality or the usefulness of information provided through or as part of the Site or any investment decision-making on the basis of the information, whether the damages were predictable or not and whether or not the operators of the Site have been acquainted with the possibility of such damages.
Limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction, and in no event shall our cumulative liability to you exceed the amount of money you transferred or deposited in your account on the Site in connection with the transaction giving rise to such liability.
                            </p>
                              
                              <h3>13. AML Procedures </h3>
                            <p>
                                  Prohibited Uses: It is prohibited to abuse this Site for purposes of money laundering. Our site employs best practice anti-money laundering. Our site reserves the right to refuse and to terminate any business relationship, and to cancel any operation of customers who do not comply with the requirements of anti-money laundering:
                                  
                                  <ol className='aml' >
                                      <li>Online traders should provide all information required for registration.</li>
                                      <li>The earnings will be paid to the person who first registered for an account online.</li>
                                      <li>When a customer maintains an account through wire transfers, the gains will be distributed to the sole owner of the originating bank account. When you make deposits in this way, it is the responsibility of the live trader to ensure that the trader’s account number and the registered name of the account owner accompany every transfer to our site.</li>
                                      
                                      <li>When a fund is made using a credit card or debit card, the winnings will be distributed solely to the person whose name appears on the card used to make the deposit and will not be reimbursed on the same card.</li>
                                      <li>Only one account is allowed per person. No gains can be levied on accounts opened under false names or multiple accounts opened by the same person.</li>
                                      
                                      <li>Our site may, from time to time at its sole discretion, require from a customer to provide additional proof of identity such as notarized copy of passport or other means of identity verification as deemed necessary circumstances and may, at its sole discretion, suspend an account until the required proof is provided.</li>
                                  </ol>
                            </p>
                             
                              <h3>14. Intellectual Property </h3>
                            <p>
                                  All content, trademarks, services marks, trade names, logos and icons are the property of our site or its affiliates or agents and are protected by law and international treaties and provisions. You agree not to remove any copyright notices or other indications of protected intellectual property rights of any material you print or download from the Site. You will not obtain any intellectual property rights, or any right or license to use such materials or the Site, other than as set out in this Agreement.
                                  Images displayed on the Site are the property of our site. You agree not to upload, post, reproduce or distribute any information, software or other material protected by copyright or any other intellectual property right (including rights of publicity and privacy) without first obtaining the permission of the owner of such rights and the prior written consent of our site.
                                  
                                  
                            </p>
                             
                              <h3>15. Indemnificiation </h3>
                            <p>
                                  You agree to defend and indemnify Our site and its officers, directors, employees, and agents and to hold them harmless from and against any and all claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney’s fees and costs, arising out of / or in any way connected with your access to / or use of the Site or Services; your violation of any of the terms in this Agreement; or your breach of any applicable laws or regulations.
                            </p>

                              <h3>16. Term and Termination </h3>
                            <p>
                                The term of the Agreement shall be unlimited, however our site will be allowed to terminate this Agreement at any time by notice to you. As of termination, you shall not be able to carry out new transactions.
                                If for any reason as defined in this agreement, either the Company or the Client should decide to terminate the relationship between them, then the following shall apply:  
                            </p>
                            <p>
                            <br /> 17a. Both sides to the agreement may terminate it with immediate effect by providing prior notice at least 15 business days in advance.
                            <br /> 17b. The sides to the agreement shall consider termination as coming into effect on the date of notification unless otherwise stated before the date of notification.
                            <br /> 17c. Upon termination, the Client will be obliged to close all open positions. If he/she fails to do so, the Company will close any open positions.
                            <br /> 17d. Upon termination, the Company shall have the right to bar the Client from having access to the Trading Platform and will have the right to refuse to accept New Orders from the Client. Moreover, the Company is entitled to refuse the Client the ability to withdraw funds from the Client’s account should there remain open or pending positions or potential future obligations on the part of the Client – this at the sole discretion of the Company.
                            <br /> 17e. Termination shall not affect obligations incurred before the notification.
                            <br /> 17f. The client shall not be required to pay additional charges ascribed to the termination.
                            <br /> 17g. Upon termination, all amounts payable will immediately become due and payable.
                                  <br /> 17h. The Company shall keep records of the Client’s trading data, banking activities, communications records and compliance materials for a period of five years.
                            </p>
                              
                              <h3>17. General Clause </h3>
                            <p>
                                  Our site will not be liable in any way to any persons in the event of force majeure, or for the act of any government or legal authority. In the event that any provision in this Agreement is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The failure of a party to enforce any right or provision of this Agreement will not be deemed a waiver of such right or provision.
Our site may assign this Agreement or any rights and/or obligations hereunder without your consent.
Our site may amend the terms of this Agreement from time to time by posting the amended terms on the Site. You are responsible for checking whether the Agreement was amended. Any amendment shall come into force as of the day it was published on the Site. If you do not agree to be bound by the changes to the terms and conditions of this Agreement, do not use or access our Services, and inform us in writing immediately.
​The parties agree that all claims, cause of action, dispute or controversy arising from or relating to this agreement with the company, its affiliates, workers, agents shall be governed by the law of the country of Bulgaria.
Any dispute which arises out of or under this Agreement will be submitted to the exclusive jurisdiction of the Courts of the country of Bulgaria.
                            </p>

                              <h3>18. Fees and Payments </h3>
                            <p>
                               Fees may be payable by the client by virtue of the fact that the trading Platform is continually provided to the client for trading, regardless of the actual use. The client agrees to be liable to pay the applicable fee as notified from time to time. The exact fee will be calculated according to the currency denomination of the client’s Trading Account and is set out as follows or as changed by the company from time to time.
Note:trading accounts might come with an upgrade if the profit exceeds expected Amount. It’s the customers decision to choose any of the upgrade plans starting from the Gold Plan. Also know that there are taxes and brokerage fee to be paid by new investors only.
                            </p>
                            <p>
                                19.1 Clearance fee <br />
                                The clearance fee is 0.5% from every trade, both winning and losing, up to 1000$. Trades that are more than 1000$ are subjected to a fixed 5$ clearance fee. For example: $25 = $0.125 $250 = $1.25 $501-$1000 = $3.00 $1000 or more = $5.00 19.2 Withdrawal fee
                                <br />All withdrawals are subjected to a service fee of 3.5%. In the event that this percentage (3.5%) equals an amount of 30.00 or below, the client will then be charged with a 30.00 withdrawal fee. The maximum withdrawal service fee is capped at 3,500.00
                                <br />19.3 Dormant fee
                                In case the Trading Account is inactive for two months or more, our Company reserves the right to charge a monthly account dormant fee. The exact fee schedule will be calculated according to the currency denomination of the Trading Account and is set out as follows: 200 USD/200 EUR/200 GBP, after 60 Days
                                Clearing and billing services are done by TLC CONSULTING LTD, MH-MARSHAL ISLANDS,AJELTAKE ROAD ,96960 ,TRUST COMPANY COMPLEX MH<br />
                                19.4 Maintenance fee<br />
                                The maintenance fee is a monthly account charge, encompassing all services and features available to the client. Starting from the initial trade the client executes, a monthly maintenance fee of 0.5% from the account balance (including bonus) will be charged for a trading account on the last day of the month.

                            </p>
                            
                              
                              <h3>19. Know your Customer Policies </h3>
                            <p>
                                  Have become increasingly important worldwide lately, especially among banks and other financial institutions, in order to prevent identity theft, money laundering, financial fraud and terrorist activity.
Our site holds a zero tolerance fraud policy, and is taking all measures possible to prevent it. Any fraudulent activity will be documented and all related accounts to it will be immediately closed. All funds in these accounts will be forfeited.
Prevention:
Our site aims to ensure the integrity of any sensitive data it obtains, such as your account information and the transactions you make, using a variety of security measures and fraud controls. Securing your electronic transactions requires us to be provided with certain data from you, including your preferred deposit method. When you deposit funds we will require the following documents <br /> <br />
                                  
                                  <ol className='aml' >
                                      <li>A copy of your valid passport with the signature page.</li>
                                      <li>Copies of your credit cards, used to make the deposit (Front side with only the 4 last digits visible, back side with the CVV covered).</li>
                                      <li>A copy of a recent utility bill in your name and address</li>
                                      
                                      <li>A signed purchase history of your online transactions</li>
                                      
                                  </ol>
                                  If you have any questions please don’t hesitate to contact our customer support:  [support@MetaForeignOptions.com] When do I need to provide these documents?
We highly appreciate you taking the time to provide us with all the necessary documents as soon as you can, in order to avoid any delays in processing your transactions. We require the receipt of all the necessary documents prior to making any cash transactions to your benefit.
Some circumstances may require us to request these documents before allowing any other activities in your account, such as deposits or trades.
Please note that if we will not receive the required documents on file, your pending withdrawals will be cancelled and credited back to your trading account. We will notify you on such event via our system.
How can I send you these documents?
Please scan your documents, or take a high quality digital camera picture, save the images as jpegs, then send it to us via mail to [support@MetaForeignOptions.com] How do I know my documents are safe with you?
Our site holds the security of documentation at highest priority, and treats all documents it receives with utmost respect and confidentiality. All files we obtain are fully protected using the highest level possible of encryption at every step of the review process. We thank you for your cooperation in helping us make Centralforexoptions a safer place to trade.
                            </p>
                              
                              <h3>20. Refund Policy </h3>
                            <p>
                                                                    
                                  <ol className='aml' >
                                      <li>In certain exceptional circumstances, our site may refund payments made by credit card. In this case, the funds will be refunded to the card that was used for the deposit.</li>
                                      <li>The Client has the right to close his/her account at any time he/she wishes to. Our site will approve the account closure if:
                                        <br/> a. There are not active investments placed.
                                          <br /> b. There are no investigations underway associated with any of the terms of the current Terms of Services.</li>
                                      
                                      <li>If there are no charges applied to the account, our site has to close the account by the Client&demand.</li>
                                      
                                      <li>If the account of the Client has been suspended due to the violation of the current Terms of Services or due to any other abuse detected by the Client, the refund is not provided under any circumstances</li>

                                      <li>Our site does not have to provide any type of the refund in case the loss was caused due to any reason either foreseen or unforeseen.</li>
                                      
                                      <li>A refund request can be made in cases in which the account had been deposited into, but no orders were executed by the client.</li>

                                      <li>In this case, the same method of payment used for the deposit will be used for the refund. The refund will be for the full amount, unless other arrangements have been made.</li>

                                      <li>Processing of refund requests can take 2~3 weeks.</li>

                                      <li>All other requests will be treated as WITHDRAWALS and will be processed using those methods and procedures.</li>

                                      <li>If you have any questions about this Policy do not hesitate to contact us by: E-mail: <a href="http://metaforeignoptions.com">[support@MetaForeignOptions.com] </a> </li>
                                  </ol>
                                  
                            </p>
                             
                              <h3>21. Complaints and disputes will be replied within 24 Hours</h3>
                            <p>
                                We thank you for your cooperation in helping us make Centralforexoptions a safer place to trade.
                                <br/> Risk Warning: please be aware that the site Centralforexoptions must not guarantee profits.                                  
                                  
                            </p>

                              <h3>22. KYC includes: </h3>
                            <p>
                               <ul>
                                      <li>CLIENT ID - clear scanned copy of the original document in color /front and back for plastic card types (residency card or driver’s license)/with actual date (non-expired) on the moment of registration/signature (if there is one) should match all other signatures of the client (CC, DOD, etc.);</li> 
                                      
                                      <li>DOD (declaration of deposit) - clear legible copy/ each line containing information about deposit must be signed separately + all signature spots that require client’s signature must be signed (i.e., bottom of the page);</li>

                                      <li>CREDIT CARD - clear legible copy / front & back / showing ONLY  partial card number (both front and back!), e.g., FIRST 6 DIGITS + 4 LAST DIGITS OR solely LAST 4 DIGITS / name should match the one on the CLIENT ID / actual date (non-expired) / CVV code at the back must be covered / card must be signed by the cardholder. ** should the credit card be used by a third party (spouse, child, etc.) POWER OF ATTORNEY legally permitting this person to act on behalf of a client MUST be included in the package.</li>

                                      <li>• UTILITY BILL - clear legible copy / recent date (maximum 3 month before registration with your company) / confirming name and residence of the client / examples: hydro (electricity) bill, water bill.</li>
                               </ul>                          
                                  
                              </p>
                              <p>Marlay Corp LTD, registration number: 1404310831, legal address 4 Hanifa Alasgarov, Baku, Azerbaijan.</p>

                              <p className='t-bolden' >
                                  If the client is not sure that his knowledge is enough, we will give him the opportunity to undergo additional training with us or our partners. The training program can be developed individually for the needs of the client.
                              </p>

                              <p>Membership Eligibility <br />
                                  Services are available and reserved only for individuals or businesses that can establish a legally binding contract under the laws applicable in their country of residence. Without limiting the undermentioned terms, our Services are not available to people aged under 18 or who have not attained the legal age (“Minors”). If you are a minor, you cannot use this service. PLEASE DO NOT USE THIS SITE IF YOU ARE NOT QUALIFIED.
                                  
                                  To avoid any doubt, we disclaim any liability for unauthorized use by minors of our Services in any manner or another. In addition, our Services are available only for people who have experience and sufficient knowledge in financial matters, able to evaluate the benefits and risks of acquiring financial contracts via this site. You are
                                  solely responsible for any decision and / or made by you based on the content of the Site.
                                  Without derogating from the above-mentioned provision, we disclaim any responsibility for auditing and/or checking your level of knowledge and/or experience, and any liability for damages and/or loss suffered as a direct result and/or indirectly from your use of the Site. It is the same for any transaction and/or use of the Services. Without limiting the above-mentioned provisions, our Services are not available in areas where their use is illegal and our site reserves the right to refuse and/or cancel access to its Services to anyone at its sole convenience.
                                  

                              </p>
                              <hr />

                              <h3>PAYMENT PROCEDURES:</h3>
                            <ul>
                                  <li>Client shall fund his trading account within 90 calendar days from the date of its opening in an amount not less than define terms for the type of account (minimum initial deposit).</li>
                                  
                                  <li>The Company has the right to close/cancel an account with the balance less than 1 cent (one-hundredth of a US dollar), if the above account balance existed for more than 90 calendar days.</li>
                                  
                                  <li>Client may request withdrawal of funds from his trading account in the amount not used to cover the margin, but not more than current balance. The minimal allowed withdrawal amount is 500 USD for compounding acccounts.</li>
                                  
                                  <li>Client places a funds withdrawal order using the Company website interface. Company is not responsible for any third party access to the Client personal information and withdrawal orders. Once an order has been received, the withdrawal amount may be deducted from the Client trading account.</li>  
                                  
                                  <li>In some cases deposits may take up to 24hours after receiving client order. The security service of the company has the right to hold the order up to 24 hours, previously having notified the client.</li>

                                  <li>The client will be given the Company bitcoin wallet address to make his deposit to his trading account via the Company website. When funding his account, the Client shall use the Company crypto wallet details, received at the Company website only and effective on the payment date. The Company cannot be held responsible for the funds which the Client transferred using crypto wallet address different from current, and does not offer investigation and refund of Client payment and cannot credit these funds to Client trading balance.</li>

                                  <li>Company reserves the right to reject a request for withdrawal in case of an explicit intention to exchange customer funds from one payment system to another.</li>
                              </ul>
                              


                              <p className="t-small">For General Inquiries Please Contact <a href="http://metaforeignoptions.com">support@MetaForeignOptions.com </a> </p>
                          </div>)

                          }
                      </div>
                </div> 
                
                  
              </div>
          </div>
          <Footer/>
          
    </div>  )
}

export default LegalDocs