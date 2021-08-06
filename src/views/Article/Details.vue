<template>
  <TransparentCard>
    <v-md-editor v-model="text" mode="preview"></v-md-editor>
    <div class="footer_btn">
      <div class="readings">
        <FireOutlined />
        阅读量：123
      </div>
      <a-button type="primary" shape="round">
        <template #icon>
          <LikeOutlined />
          有用
        </template>
      </a-button>
      <a-button shape="round">
        <template #icon>
          <DislikeOutlined />
          无用
        </template>
      </a-button>
    </div>
  </TransparentCard>
  <TransparentCard>
    <a-comment>
      <template #actions>
        <span key="comment-nested-reply-to">Reply to</span>
      </template>
      <template #author>
        <a>Han Solo</a>
      </template>
      <template #avatar>
        <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
        />
      </template>
      <template #content>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </template>
      <a-comment>
        <template #actions>
          <span>Reply to</span>
        </template>
        <template #author>
          <a>Han Solo</a>
        </template>
        <template #avatar>
          <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
          />
        </template>
        <template #content>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </template>
        <a-comment>
          <template #actions>
            <span>Reply to</span>
          </template>
          <template #author>
            <a>Han Solo</a>
          </template>
          <template #avatar>
            <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
          </template>
          <template #content>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure).
            </p>
          </template>
        </a-comment>
        <a-comment>
          <template #actions>
            <span>Reply to</span>
          </template>
          <template #author>
            <a>Han Solo</a>
          </template>
          <template #avatar>
            <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
          </template>
          <template #content>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure).
            </p>
          </template>
        </a-comment>
      </a-comment>
    </a-comment>
  </TransparentCard>
</template>

<script>
import { FireOutlined,LikeOutlined,DislikeOutlined } from '@ant-design/icons-vue';
import {defineComponent} from "vue";
const text = `# 服务器基础配置

##  1. Nginx

### 1.1 安装

\`\`\`shell
sudo yum install nginx
\`\`\`

### 1.2 启动服务

\`\`\`shell
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
\`\`\`

### 1.3 \`nginx.conf\` 配置

\`\`\`nginx
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user root;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /root/adui-blog;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

# Settings for a TLS enabled server.
#
    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  www.adui.online;
        root         /root/adui-blog;

        ssl_certificate "/etc/pki/nginx/1_www.adui.online_bundle.crt";
        ssl_certificate_key "/etc/pki/nginx/private/2_www.adui.online.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers PROFILE=SYSTEM;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

}
\`\`\`

###  1.4  重启服务

\`\`\`shell
nginx -s reload
\`\`\`

##  2. MySQL

### 2.1 安装

\`\`\`shell
sudo dnf install @mysql
\`\`\`

###  2.2 开机自启

\`\`\`shell
sudo systemctl enable --now mysqld
\`\`\`

### 2.3 添加密码及安全设置

\`\`\`shell
sudo mysql_secure_installation
\`\`\`

> \`y\` -> \`0\` -> \`pwd\` -> \`y\` -> \`y\` -> \`n\` -> \`y\` -> \`y\`

###  2.4 配置远程登陆

\`\`\`shell
mysql -uroot -p<上面步骤中设置的密码>
\`\`\`

执行下面sql语句，执行完成后重启

\`\`\`mysql
use mysql;
update user set host='%' where user='root';
flush privileges;
\`\`\`

`

export default defineComponent({
  name: "Details",
  components:{
    FireOutlined,
    LikeOutlined,
    DislikeOutlined
  },
  setup(){
    return {
      text
    }
  }
})
</script>

<style scoped lang="less">
.footer_btn {
  margin-top: 20px;
  text-align: right;
  .readings {
    display: inline-block;
  }
  .ant-btn {
    margin-left: 10px;
  }
}

</style>
