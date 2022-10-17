import { Component } from '@angular/core';
import { AuthConfig, JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './login-logout.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-Logout';

  constructor(private oauthService: OAuthService ){
    this.configure();
  }

  configure(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  // login(){
  //   this.oauthService.initImplicitFlow();
  // }

  // logout(){
  //   this.oauthService.logOut();
  // }

  get token(){
    let claims: any;
    claims = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
