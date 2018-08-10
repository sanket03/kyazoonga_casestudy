import React from 'react';

const NewsLetter = () => {
    return (
        <div class="row">
            <div class="col-sm-3 cont-drop">
                <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        <div class="col-sm-9 home-newsletter">
          <div class="row">
            <div class="col-sm-5 news-subs-txt">
              <h3>Subscribe to our Newsletter</h3>
            </div>
            <div class="col-sm-7">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Enter your email"/>
                <span class="input-group-btn">
                 <button class="btn btn-theme" type="submit">Subscribe</button>
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsLetter;