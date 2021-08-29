import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MENComponent } from './men/men.component';
import { WOMENComponent } from './women/women.component';
import { KIDSComponent } from './kids/kids.component';
import { HOMEComponent } from './home/home.component';
import { BEAUTYComponent } from './beauty/beauty.component';
import { ExtraComponent } from './extra/extra.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './slider/slider.component';
import { KnockoutComponent } from './knockout/knockout.component';
import { BrandComponent } from './brand/brand.component';
import { MethodComponent } from './method/method.component';
import { TextComponent } from './text/text.component';
import { FooterComponent } from './footer/footer.component';
import { SliderssComponent } from './sliderss/sliderss.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiggestbrandComponent } from './biggestbrand/biggestbrand.component';
import { NewfooterComponent } from './newfooter/newfooter.component';
import { SloderComponent } from './sloder/sloder.component';
import { ShppingsComponent } from './shppings/shppings.component';
import { FootComponent } from './foot/foot.component';
import { ShopsComponent } from './shops/shops.component';
import { BagsComponent } from './bags/bags.component';
import { FoosComponent } from './foos/foos.component';
import { HutsComponent } from './huts/huts.component';
import { ButsComponent } from './buts/buts.component';
import { NewslideComponent } from './newslide/newslide.component';
import { LoginComponent } from './login/login.component';
import { FooessComponent } from './fooess/fooess.component';
import { FlapComponent } from './flap/flap.component';
import { LogpageComponent } from './logpage/logpage.component';
import { HelloComponent } from './hello/hello.component';
import { FoolComponent } from './fool/fool.component';
import { KipComponent } from './kip/kip.component';
import { BrandsclothesComponent } from './brandsclothes/brandsclothes.component';
import { ShoesdealComponent } from './shoesdeal/shoesdeal.component';
import { KuytComponent } from './kuyt/kuyt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DesignComponent } from './design/design.component';
import { NothingComponent } from './nothing/nothing.component';
import { SearchComponent } from './search/search.component';
import { BuyComponent } from './buy/buy.component';
import { BUYSComponent } from './buys/buys.component';
import { MilComponent } from './mil/mil.component';
import { AllComponent } from './all/all.component';
import { FooComponent } from './foo/foo.component';
import { CartsComponent } from './carts/carts.component';
import { TakeComponent } from './take/take.component';
import { TakesComponent } from './takes/takes.component';
import { MilsaComponent } from './milsa/milsa.component';
import { TkComponent } from './tk/tk.component';
import { HoldComponent } from './hold/hold.component';
import { PricesComponent } from './prices/prices.component';
import { HikComponent } from './hik/hik.component';
import { FiltComponent } from './filt/filt.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BuyerComponent } from './buyer/buyer.component';
import { Card2Component } from './card2/card2.component';
import { CompComponent } from './comp/comp.component';
import { Comp1Component } from './comp1/comp1.component';
import { HoComponent } from './ho/ho.component';
import { BsComponent } from './bs/bs.component';
import { KitComponent } from './kit/kit.component';
import { StartComponent } from './start/start.component';
import { Card3Component } from './card3/card3.component';
import { SterComponent } from './ster/ster.component';
import { StrComponent } from './str/str.component';
import { KoplComponent } from './kopl/kopl.component';
import { LpComponent } from './lp/lp.component';
import { TdsComponent } from './tds/tds.component';
import { LoComponent } from './lo/lo.component';
import { BuysomethingComponent } from './buysomething/buysomething.component';
import { KartComponent } from './kart/kart.component';
import { RifComponent } from './rif/rif.component';
import { IITComponent } from './iit/iit.component';
import { Card4Component } from './card4/card4.component';
 


 const appRoutes:Routes=[
  {path:'', component:ExtraComponent},
  {path:'men', component:MENComponent},
  {path:'women',component:WOMENComponent},
  {path:'kids',component:KIDSComponent},
  {path:'home',component:HOMEComponent},
  {path:'beauty',component:BEAUTYComponent},
  {path: 'login',component:LoginComponent},
  {path:'brandsclothes',component:BrandsclothesComponent},
  {path:'nothing',component:NothingComponent},
  {path:'buy',component:BuyComponent},
  {path:'carts',component:CartsComponent},
  {path:'take',component:TakeComponent},
  {path:'prices',component:PricesComponent},
  {path:'hold',component:HoldComponent},
  {path: 'buyer',component:BuyerComponent},
  {path: 'card2', component:Card2Component},
  {path: 'bs',component:BsComponent},
  {path: 'start',component:StartComponent},
  {path: 'card3',component:Card3Component},
  {path: 'ster',component:SterComponent},
  {path: 'kopl',component:KoplComponent},
  {path: 'buysomething',component:BuysomethingComponent},
  {path: 'kart',component:KartComponent},
  {path: 'card4',component:Card4Component},
 ]
@NgModule({
  declarations: [
    AppComponent,
    MENComponent,
    WOMENComponent,
    KIDSComponent,
    HOMEComponent,
    BEAUTYComponent,
    ExtraComponent,
    ContainerComponent,
    SliderComponent,
    KnockoutComponent,
    BrandComponent,
    MethodComponent,
    TextComponent,
    FooterComponent,
    SliderssComponent,
    BiggestbrandComponent,
    NewfooterComponent,
    SloderComponent,
    ShppingsComponent,
    FootComponent,
    ShopsComponent,
    BagsComponent,
    FoosComponent,
    HutsComponent,
    ButsComponent,
    NewslideComponent,
    LoginComponent,
    FooessComponent,
    FlapComponent,
    LogpageComponent,
    HelloComponent,
    FoolComponent,
    KipComponent,
    BrandsclothesComponent,
    ShoesdealComponent,
    KuytComponent,
    DesignComponent,
    NothingComponent,
    SearchComponent,
    BuyComponent,
    BUYSComponent,
    MilComponent,
    AllComponent,
    FooComponent,
    CartsComponent,
    TakeComponent,
    TakesComponent,
    MilsaComponent,
    TkComponent,
    HoldComponent,
    PricesComponent,
    HikComponent,
    FiltComponent,
    ScrollToTopComponent,
    BuyerComponent,
    Card2Component,
    CompComponent,
    Comp1Component,
    HoComponent,
    BsComponent,
    KitComponent,
    StartComponent,
    Card3Component,
    SterComponent,
    StrComponent,
    KoplComponent,
    LpComponent,
    TdsComponent,
    LoComponent,
    BuysomethingComponent,
    KartComponent,
    RifComponent,
    IITComponent,
    Card4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
   MatRadioModule,
   MatCheckboxModule,
    
   
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
