import { RiseRealize } from 'vue-rise-realize';
import axios from '../plugins/request';
import { Message } from 'element-ui';

//字典值配置
const getDic = (val) => {
  return axios({
    //这里为自己的字典值接口
    url: '/api/dictionary',
    method: 'get',
    params: {
      code: val,
    },
  }).then((response) => {
    //返回出来的数据处理，最后retuen数组
    return response.data.data;
  });
};

//上传成功后函数
const uploadDoneFn = (response) => {
  if (response.success) {
    return response.data;
  } else {
    return false;
  }
};

//下载配置
const downloadFn = (id) => {
  axios({
    url: `/infra/file/get/${id}`,
    method: 'get',
    responseType: 'arraybuffer',
  })
    .then((res) => {
      if (res) {
        let headers = res.headers;
        let content = headers['content-disposition'];
        //下载后文件名
        let filename = decodeURI(content.split(';')[1].split('filename=')[1]);
        let blob = new Blob([res.data], {
          type: res.headers['content-type'],
        });
        let downloadElement = document.createElement('a');
        // 创建下载链接
        let href = URL.createObjectURL(blob);
        downloadElement.href = href;
        downloadElement.download = filename;
        document.body.appendChild(downloadElement);
        // 点击下载
        downloadElement.click();
        // 下载移除元素
        document.body.removeChild(downloadElement);
        // 释放掉blob对象
        URL.revokeObjectURL(href);
      } else {
        Message.error('获取下载地址失败');
      }
    })
    .catch(() => {
      Message.error('下载失败');
    });
};

const config = {
  axios,
  downloadFn,
  getDic,
  uploadDoneFn,
  uploadAction: '/api/upload',
};

const Rise = RiseRealize.create(config);

export default Rise;
