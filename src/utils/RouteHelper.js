import { NavigationActions } from "react-navigation";

export class RouteHelper {
  //app only instance of navigation component fix goBackTo() method return is navigation cannot continue goBack() bug
  static get navigation() {
    return this.routeStack.length !== 0
      ? this.routeStack[this.routeStack.length - 1]
      : null;
  }

  // The last time the to method was executed
  static lastActionTime = 0;
  // Repeatedly click to determine the interval time, in milliseconds
  static interval: number = 500;
  //List save routing stack information
  static routeStack: Array = [];
  //route interceptor
  static routeInterceptor: (routeName: string, params: Object) => boolean;

  /**
   * Add to navigation stack
   * @param navigation
   */

  static addStack(navigation) {
    if (
      this.routeStack.findIndex(
        item => navigation.state.key === item.state.key
      ) === -1
    ) {
      //Save state to local
      this.routeStack.push(navigation);
    } else {
      console.log("can not add routeStack", navigation.state.key);
    }
    //console.log("routeStack", this.routeStack.length);
  }

  /**
   * Remove from navigation stack
   * @param navigation
   */
  static remove(navigation) {
    let index = this.routeStack.findIndex(
      item => navigation.state.key === item.state.key
    );
    if (index !== -1) {
      this.routeStack.splice(index, 1);
    }
  }

  /**
   *
   * Global route jump method can be used anywhere
   * @param routeName
   * @param params
   * @param delay
   */
  static navigate(routeName, params, delay = true) {
    //Prevent duplicate clicks
    let nowTime = new Date().getTime();
    if (nowTime - this.lastActionTime <= this.interval && delay) {
      //Repeated clicks
      console.warn("Repeatedly clicked within the interval");
      return;
    }
    if (this.routeInterceptor && !this.routeInterceptor(routeName, params)) {
      console.log("Route jump blocked");
      return;
    }
    if (!this.navigation) {
      console.error("Please initialize the route first");
      return;
    }
    this.lastActionTime = nowTime;
    this.navigation.navigate(routeName, params);
  }

  static goBack(key) {
    this.navigation.goBack(key);
  }

  static pop(n: number, params) {
    this.navigation.pop(n, params);
  }

  static popToTop(params) {
    this.navigation.popToTop(params);
  }

  static replace(routeName, params) {
    this.navigation.replace(routeName, params);
  }

  static push(routeName, params, delay = true) {
    let nowTime = new Date().getTime();
    if (nowTime - this.lastActionTime <= this.interval && delay) {
      //Repeated clicks
      console.warn("Repeatedly clicked within the interval");
      return;
    }
    if (this.routeInterceptor && !this.routeInterceptor(routeName, params)) {
      console.log("Route jump blocked");
      return;
    }
    if (!this.navigation) {
      console.error("Please initialize the route first");
      return;
    }
    this.lastActionTime = nowTime;
    this.navigation.push(routeName, params);
  }

  /**
   * Returns the first routeName principle. StackNavigation can use goBack(key) to return the previous page of the specified page.
   * So according to want to return to routeName page you need to find the routing stack list has the first index of this routeName. Get index + value key, you can go back to the first routeName page
   * @param routeName  Declared component name
   * @returns {boolean} Correct indicates return success
   */
  static goBackTo(routeName) {
    let tag = false;
    this.routeStack.forEach(({ state }, i) => {
      //The same routeName is determined and not the last one in the list indicates a successful match
      if (
        state.routeName === routeName &&
        i < this.routeStack.length - 1 &&
        !tag
      ) {
        //Get +1's key
        let key = this.routeStack[i + 1].state.key;
        //Need to remove the value behind the navigation stack index
        //Implementing the goBack(key) method of StackNavigation
        this.navigation.goBack(key);
        tag = true;
      }
    });
    return tag;
  }

  /**
   * Reset the route, only reset one page, if you need to customize the route. Write by reference
   * @param routeName
   */
  static reset(routeName) {
    let resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    });
    this.navigation.dispatch(resetAction);
  }
}
