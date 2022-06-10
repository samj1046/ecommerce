using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace coursework2.Controllers
{
    public class ShopController : Controller
    {
        // GET: Shop
       
        
            public ActionResult Shop()
            {
                return View();
            }
        public ActionResult Sell()
        {
            return View();
        }
        public ActionResult Checkout()
        {
            return View();
        }
    }
}