import axios from 'axios';

const my_transformRequest = (data) => {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
};

const my_axios = (url,method,data={},this_trans=my_transformRequest,content_type='application/x-www-form-urlencoded') =>{
	return axios({
      url: url,
      method: method,
      data: data,
      transformRequest: this_trans,
      headers: {
        'Content-Type': content_type,
        "X-CSRFtoken": get_csrf_cookie()
      }
    })
}

export default my_axios;