import { CustomerDetails } from "../helpers/printHelper.js";
import { customerDetails2 } from "../helpers/printHelper2.js";
var customerDeatis = new CustomerDetails();
customerDeatis.printFirstName("John");
customerDeatis.printLastName("Smith");

//second way
//we can define customerDetails instance directly inside printHelper file
//implementation of this is in printHelper2.js
//and then we can import it here
customerDetails2.printFirstName("John");


