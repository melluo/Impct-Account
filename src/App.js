import React from 'react';
import './App.css';



class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          displayHistory: true,
          displayInvestment: false,
          displayWishList: false,
          displayPersonalInfo: false,
          displayShippingAd: false,
          displayPayment: false
      }
      this.displayHistory = this.displayHistory.bind(this);
      this.displayInvestment = this.displayInvestment.bind(this);
      this.displayWishList = this.displayWishList.bind(this);
      this.displayPersonalInfo = this.displayPersonalInfo.bind(this);
      this.displayShippingAd = this.displayShippingAd.bind(this);
      this.displayPayment = this.displayPayment.bind(this);

  }

  displayHistory(){
      this.setState({
          displayHistory: true,
          displayInvestment: false,
          displayWishList: false,
          displayPersonalInfo: false,
          displayShippingAd: false,
          displayPayment: false

      })
  }
  displayInvestment(){
      this.setState({
          displayInvestment: true,
          displayHistory: false,
          displayWishList: false,
          displayPersonalInfo: false,
          displayShippingAd: false,
          displayPayment: false

      })
  }
  displayWishList(){
      this.setState({
          displayInvestment: false,
          displayWishList: true,
          displayHistory: false,
          displayPersonalInfo: false,
          displayShippingAd: false,
          displayPayment: false
      })
  }
  displayPersonalInfo(){
      this.setState({
          displayInvestment: false,
          displayWishList: false,
          displayHistory: false,
          displayPersonalInfo: true,
          displayShippingAd: false,
          displayPayment: false
      })
  }
  displayShippingAd(){
      this.setState({
          displayInvestment: false,
          displayWishList: false,
          displayHistory: false,
          displayPersonalInfo: false,
          displayShippingAd: true,
          displayPayment: false
      })
  }
  displayPayment(){
      this.setState({
          displayInvestment: false,
          displayWishList: false,
          displayHistory: false,
          displayPersonalInfo: false,
          displayShippingAd: false,
          displayPayment: true
      })
  }
  renderInvestments(){
      if(this.state.displayInvestment){
          return(
              <div className="investments-main">
                  <div className ="title">Investments</div>
                  <table className="investments-table">
                      <tr>
                          <th>Number</th>
                          <th>Date</th>
                          <th>Cause</th>
                          <th>Amount</th>
                      </tr>
                      <tr>
                          <th>1</th>
                          <th>June 12, 2020</th>
                          <th>Royal Coffee</th>
                          <th>$3.00</th>
                      </tr>
                      <tr>
                          <th>2</th>
                          <th>May 30, 2020</th>
                          <th>Rice Inc.</th>
                          <th>$3.00</th>
                      </tr>
                      <tr>
                          <th>3</th>
                          <th>May 23, 2020</th>
                          <th>Rice Inc.</th>
                          <th>$3.63</th>
                      </tr>
                      <tr>
                          <th>4</th>
                          <th>May 5, 2020</th>
                          <th>Kiva.org</th>
                          <th>$3.38</th>
                      </tr>
                  </table>
                  <div className="feed-title">Investment Feed</div>
                  <img alt= "Just kidding!" src="https://media0.giphy.com/media/xT5LMDYj4kvKNlGDHq/giphy.gif?cid=ecf05e47a0fd3a1c3f8f31a5acdfcb53130542fc583faa46&rid=giphy.gif"></img>
              </div>
          )
      }
  }
  renderHistory(){
      if(this.state.displayHistory){
          return(
              <div className="history-main">
                  <div className ="title">Order History</div>
                  <ul>
                      <li className='container'>
                          <div class = "name">Colombia Medellin Smallholder - Swiss Water Process Decaf - Medium</div>
                          <div class="date">June 11, 2020</div>
                          
                          <div class = "price">$12.00</div>    
                          <img className="image1" src="https://cdn.shopify.com/s/files/1/1270/7265/products/gift-Mockup_1189b831-4c3d-4a33-b79e-bafbc34de958_460x.png?v=1585930885"></img>
                          <a target="_blank"  rel="noopener noreferrer" class="repurchase" href="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/colombia-medellin-smallholder-swiss-water-process-decaf-medium-1lb">Buy Again</a>
                              
                          <div class = "delivery-details">
                          <strong>Shipped</strong>
                          <div>USPS 920551939274738</div>
                          
                          </div>
                      </li>
                      <li className='container'>
                          <div class = "name">Colombia Medellin Smallholder - Swiss Water Process Decaf - Medium</div>
                          <div class="date">May 28, 2020</div>
                          
                          <div class = "price">$12.00</div>    
                          <img className="image1" src="https://cdn.shopify.com/s/files/1/1270/7265/products/gift-Mockup_1189b831-4c3d-4a33-b79e-bafbc34de958_460x.png?v=1585930885"></img>
                          <a target="_blank"  rel="noopener noreferrer" class="repurchase" href="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/colombia-medellin-smallholder-swiss-water-process-decaf-medium-1lb">Buy Again</a>
                              
                          <div class = "delivery-details">
                          <strong>Delivered</strong>
                          <div>USPS 920231239812338</div>
                          
                      </div>
                      </li>
                      <li className='container'>
                          <div class = "name">Uganda Nebbi Zombo Natural - Medium-Fruity</div>
                          <div class="date">May 21, 2020</div>
                          
                          <div class = "price">$14.50</div>    
                          <img className="image1" src="https://cdn.shopify.com/s/files/1/1270/7265/products/PlayCoffeeBox_c02a3221-082e-401a-8e60-161424430103_460x.png?v=1585930891"></img>
                          <a target="_blank"  rel="noopener noreferrer" class="repurchase" href="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/uganda-nebbi-zombo-natural-medium-complex-1lb">Buy Again</a>
                              
                          <div class = "delivery-details">
                          <strong>Delivered</strong>
                          <div>USPS 9205551795193923</div>
                          
                      </div>
                      </li>
                          <li className='container'>
                          <div class = "name">Guatemala Asociación Barillense Organic - Medium - Sweet</div>
                          <div class="date">May 3, 2020</div>
                          
                          <div class = "price">$13.50</div>    
                          <img className="image1" src="https://cdn.shopify.com/s/files/1/1270/7265/products/DreamCoffeeBox_11d61ab9-5994-4c6d-b815-92c33982a6a1_900x.png?v=1585930890"></img>
                          <a target="_blank"  rel="noopener noreferrer"  class="repurchase" href="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/guatemala-asobagri-collective-medium-sweet-1lb">Buy Again</a>
                              
                          <div class = "delivery-details">
                          <strong>Delivered</strong>
                          <div>USPS 9319249531134327</div>
                          
                          </div>
                      </li>
                  
                  
                  </ul>
              </div>
          );
      }
  }

  renderWishList(){
      if(this.state.displayWishList){
          return(
              <div className="wishlist-main">
                  <div className ="title">Wish List</div>
                  <ul className="wishlist-container">
                      <li>
                      <img className="wish1" alt="Impact Blend - Medium/Dark - Bold - 1LB" src="https://cdn.shopify.com/s/files/1/1270/7265/products/HopeCoffeeBox_900x.png?v=1584721322"></img>
                      <a target="_blank"  rel="noopener noreferrer" href ="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/impact-blend-medium-roast-sweet" className = "text">Treat Yourself!</a>
                      </li>
                      <li>
                      <img className="wish1" alt="El Salvador Cerro Las Ranas - Medium - Sweet - 1LB" src="https://cdn.shopify.com/s/files/1/1270/7265/products/DreamCoffeeBox_900x.png?v=1584721321"></img>
                      <a target="_blank"  rel="noopener noreferrer" href ="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/el-salvador-cerro-las-ranas-medium-sweet" className = "text">Treat Yourself!</a>

                      </li>
                      <li>
                      <img className="wish1" alt="Ethiopia Yirgacheffe Kochere - Medium - Fruity - 1LB" src="https://cdn.shopify.com/s/files/1/1270/7265/products/PlayCoffeeBox_900x.png?v=1584721321"></img>
                      <a target="_blank"  rel="noopener noreferrer" href ="https://impct.co/collections/oakland-ca-roasted-impact-trade-coffee/products/ethiopia-yirgacheffe-medium-fruity" className = "text">Treat Yourself!</a>

                      </li>
                  </ul>
              </div>
          )
      }
  }

  renderPersonalInfo(){
      if(this.state.displayPersonalInfo){
          return(
              <div className="info-main">
                  <div className ="title">Personal Information</div>
                  <div className="info-container">
                      <div className = "sign-in">Login Info</div>
                          <p>Email</p>
                          <section>coolcat@gmail.com</section>
                          <a href="#" alt="I'm a placeholder link that doesn't do anything!">Edit</a>
                        
                          <p>Password</p>
                          

                          <a href="#" alt="I'm a placeholder link that doesn't do anything!">Change Password</a>
                          
                      <div className = "personal">Personal Info</div>
                          <p>Name</p>
                          <section>Tiger</section>
                          <a href="#" alt="I'm a placeholder link that doesn't do anything!">Edit</a>

                          <p>Mobile Number</p>
                          <section>(248) 835-3951</section>
                          <a href="#" alt="I'm a placeholder link that doesn't do anything!">Edit</a>
                  </div>
              </div>
          )
      }

  }
  renderShippingAd(){
      if(this.state.displayShippingAd){
          return(
              <div className="shipping-main">
              <div className ="title">Shipping Addresses</div>
              <a className ="add-new-shipping" href="#" alt="I'm a placeholder link that doesn't do anything!">Add New Address</a>
                  <section className="ad1">
                  <p>Primary Shipping Address  </p>
                      <div>Tiger</div>
                      <div>Cafe Dog & Cats</div>
                      <div>Taipei City, Taiwan</div>
                      <p></p>
                    
                
                  <a href ="#">Edit</a>
                  <br></br>
                  <a href ="#">Remove</a>

                  </section>
                  <section className="ad2">
                
                      <div>Tiger</div>
                      <div>Temari no Ouchi / Nyafe Melange </div>
                      <div>Tokyo, Japan</div>
                      <p></p>
                

                  <a href ="#">Edit</a>
                  <br></br>
                  <a href ="#">Set as Primary</a>
                  <br></br>
                  <a href ="#">Remove</a>

                  </section>
              </div>
          )
      }
  }
  renderPayment(){
      if(this.state.displayPayment){
          return(
              <div className="payment-main">
              <div className ="title">Payment Methods</div>
              <a className ="add-new-pay" href="#" alt="I'm a placeholder link that doesn't do anything!">Add New Card</a>
                  <section className="pay">
                  <p>Primary Card</p>
                      <p>MasterCard 2020</p>
                      <div>Tiger</div>
                      <div>Cafe Dog & Cats</div>
                      <div>Taipei City, Taiwan</div>
                      <p></p>
                
                  <a href ="#">Edit</a>
                  <br></br>
                  <a href ="#">Remove</a>

                  </section>
                  
              </div>
          )
      }
  }
  render(){
      return(
          <div className="App">
          <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"/>

          <div className="header">
              <i className="fa fa-bars"></i>
              <img className="logo" alt="logo" src = "https://cdn.shopify.com/s/files/1/1270/7265/files/white_logo-03_x80.png?v=1590019214"></img>
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-header-cart" viewBox="0 0 24.3 26"><path d="M22.6 21.5v-2H7.9c-.2 0-.4-.1-.4-.1 0-.1 0-.3.2-.5l2.3-2.1 13.2-1.4 1.1-10h-18L4.6 1 .5 0 0 1.9l3.1.7 5.2 13-2 1.8c-.8.7-1 1.8-.7 2.7.4.9 1.2 1.4 2.3 1.4h14.7zM7.1 7.4H22l-.7 6.2-11.2 1.2-3-7.4z"></path><ellipse cx="8.1" cy="24.4" rx="1.6" ry="1.6"></ellipse><ellipse cx="21.7" cy="24.4" rx="1.6" ry="1.6"></ellipse></svg>
          </div> 
              <div className="main">
                  <div className="sidebar">
                      <div className="sidebar-header">
                          <div>Tiger's Account</div>
                      </div>
                      <ul>
                          <li onClick={this.displayHistory}>
                          <i class="fa fa-shopping-bag"></i>
                          Order History
                          </li>
                          <li onClick={this.displayInvestment}>    
                          <i class="fas fa-chart-line"></i>
                          Investments
                          </li>
                          <li onClick={this.displayWishList}>
                          <i class="far fa-heart"></i>
                          Wish List
                          </li>
                          <div className="section-cutoff"></div>
                          <li onClick={this.displayPersonalInfo}>
                          <i class="fas fa-unlock-alt"></i>
                          Personal Information
                          </li>
                          <li onClick={this.displayShippingAd}>
                          <i class="fas fa-truck"></i>
                          Shipping Addresses
                          </li>
                          <li onClick={this.displayPayment}>
                          <i class="far fa-credit-card"></i>
                          Payment Methods
                          </li>
                  
                      </ul>
                      
                  </div>
                  <div className = "toggle-information">
                    {this.renderHistory()}
                    {this.renderInvestments()}
                    {this.renderWishList()}
                    {this.renderPersonalInfo()}
                    {this.renderShippingAd()}
                    {this.renderPayment()}
                  </div>
              </div>

          </div>
      )
  }
}


export default App;
