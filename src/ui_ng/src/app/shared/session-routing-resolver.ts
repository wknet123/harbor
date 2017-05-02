// Copyright (c) 2017 VMware, Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { SessionService } from '../shared/session.service';
import { SessionUser } from './session-user';

@Injectable()
export class SessionRoutingResolver implements Resolve<SessionUser>{

  constructor(
    private sessionService: SessionService,
    private router: Router) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<SessionUser> {
    console.log('Resovling in session routing resolver...');
    return this.sessionService.retrieveUser();
  } 
}