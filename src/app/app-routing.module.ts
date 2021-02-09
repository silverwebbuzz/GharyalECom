import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'forgotpass', loadChildren: './forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'categoryproduct', loadChildren: './categoryproduct/categoryproduct.module#CategoryproductPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'account', canActivate: [AuthGuard], loadChildren: './account/account.module#AccountPageModule' },
  { path: 'address', loadChildren: './address/address.module#AddressPageModule' },
  { path: 'wishlist', canActivate: [AuthGuard], loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'productreview', loadChildren: './productreview/productreview.module#ProductreviewPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'productdetail', loadChildren: './productdetail/productdetail.module#ProductdetailPageModule' },
  { path: 'billing', canActivate: [AuthGuard], loadChildren: './billing/billing.module#BillingPageModule' },
  { path: 'checkout', canActivate: [AuthGuard], loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'summary', canActivate: [AuthGuard], loadChildren: './summary/summary.module#SummaryPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'faqdetails', loadChildren: './faqdetails/faqdetails.module#FaqdetailsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'storelocator', loadChildren: './storelocator/storelocator.module#StorelocatorPageModule' },
  { path: 'product-review', loadChildren: './product-review/product-review.module#ProductReviewPageModule' },
  { path: 'shipping-address', loadChildren: './component/shipping-address/shipping-address.module#ShippingAddressPageModule' },
  { path: 'addnewaddress', loadChildren: './component/addnewaddress/addnewaddress.module#AddnewaddressPageModule' },
  { path: 'orderlist', canActivate: [AuthGuard], loadChildren: './orderlist/orderlist.module#OrderlistPageModule' },
  { path: 'order-detail', canActivate: [AuthGuard], loadChildren: './order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'editaddress', loadChildren: './component/editaddress/editaddress.module#EditaddressPageModule' },
  { path: 'notifications', loadChildren: './component/notifications/notifications.module#NotificationsPageModule' },  { path: 'rewards', loadChildren: './rewards/rewards.module#RewardsPageModule' },
  { path: 'newsletter', loadChildren: './newsletter/newsletter.module#NewsletterPageModule' },
  { path: 'account-info', loadChildren: './account-info/account-info.module#AccountInfoPageModule' },
  { path: 'sell', loadChildren: './sell/sell.module#SellPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
