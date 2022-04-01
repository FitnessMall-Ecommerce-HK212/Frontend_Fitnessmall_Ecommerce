// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AccountBalance } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect} from 'react-router-dom';
import {Footer, Header,Sidebar,CTAButton} from '../components';
export default function Account(){
   return (
       <>
        <Header/>
        <div class="Container_acc" style={{backgroundColor:"white"}}>
          <div class="Account_Style">
          <Sidebar/>
          <div class="Infor_Style">
          <span class="info-title">Thông tin cá nhân</span>
            <div class="styles_StyledAccountInfo">
             <form>
             <div class="form-info">
               <div class="form-avatar" style={{marginRight:"16px"}}>
                 <div class="styles_StyleAvatar">
                 <div>
                 <div class="avatar-view">
                 <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png" alt="avatar" class="default" style={{width: "50px",height: "50px"}}/>
                 <div class="edit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" class="edit_img" alt="" style={{width: "10px",height: "10px"}}/>
                 </div></div></div></div>
               </div>
               <div class="form-name" >
                 <div class="form-control" style={{display:"flex",border:"none"}}>
                   <label class="input-label">Họ &amp; Tên</label>
                   <div>
                   <div class="hisWEc"><input class="input " type="search" name="fullName" maxlength="128" placeholder="Thêm họ tên" value="Nguyễn Huỳnh Tiến"/>
                 </div></div></div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                  <label class="input-label">Nickname</label>
                  <div>
                  <div class="hisWEc"><input class="input " name="userName" maxlength="128" placeholder="Thêm nickname" type="search" value=""/>
                  </div></div></div></div></div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                  <label class="input-label">Ngày sinh</label>
                  <div class="style_StyledBirthdayPicker">
                  <select name="day">
                    <option value="0">Ngày</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                  <select name="month">
                    <option value="0">Tháng</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
                  <select name="year">
                    <option value="0">Năm</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option></select>
                  </div></div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Giới tính</label>
                    <label class="Radio_StyledRadio">
                        <input type="radio" name="gender" value="male"/><span class="radio-fake"></span><span class="label">Nam</span></label>
                    <label class="Radio_StyledRadio">
                        <input type="radio" name="gender" value="male"/><span class="radio-fake"></span><span class="label">Nữ</span></label>
                    <label class="Radio_StyledRadio">
                        <input type="radio" name="gender" value="male"/><span class="radio-fake"></span><span class="label">Khác</span></label>
                    </div>
                <div class="form-control" style={{display:"flex",border:"none"}}>
                    <label class="input-label">Quốc tịch</label>
                    <div><div class="hisWEc">
                        <input style={{paddingRight: "35px"}} class="input with-icon-right" name="nationality" maxlength="128" placeholder="Chọn quốc tịch" readonly="" value=""/>
                        {/* <svg class="icon-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z" fill="#808089"></path></svg> */}
                        </div></div></div>
                    <div class="form-control" style={{display:"flex",border:"none"}}>
                        <label class="input-label">&nbsp;</label>
                        <CTAButton value="Lưu thay đổi"/>
                        </div>
            </form></div>
          </div>
          </div>
        </div>
        <Footer/>
       </>
      
   )
}