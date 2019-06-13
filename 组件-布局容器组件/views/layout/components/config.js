/**
 * @Author: duxing
 * @Date:
 */
let config = {
  'entity': null,
  'childs': [
    {
      'entity': {
        'id': 1,
        'parentMenuId': 0,
        'name': '系统管理',
        'icon': 'el-icon-message\r\n',
        'alias': '系统管理',
        'state': 'ENABLE',
        'sort': 0,
        'value': null,
        'type': 'NONE',
        'createUserId': 1
      },
      'childs': [
        {
          'entity': {
            'id': 3,
            'parentMenuId': 1,
            'name': '权限管理',
            'icon': 'el-icon-loading',
            'alias': '权限管理',
            'state': 'ENABLE',
            'sort': 0,
            'value': '/system/auth',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        },
        {
          'entity': {
            'id': 4,
            'parentMenuId': 1,
            'name': '角色管理',
            'icon': 'el-icon-bell',
            'alias': '角色管理',
            'state': 'ENABLE',
            'sort': 1,
            'value': '/system/role',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        },
        {
          'entity': {
            'id': 2,
            'parentMenuId': 1,
            'name': '菜单管理',
            'icon': 'el-icon-edit',
            'alias': '菜单管理',
            'state': 'ENABLE',
            'sort': 2,
            'value': '/system/menu',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        },
        {
          'entity': {
            'id': 5,
            'parentMenuId': 1,
            'name': '分组管理',
            'icon': 'el-icon-mobile-phone\r\n',
            'alias': '分组管理',
            'state': 'ENABLE',
            'sort': 3,
            'value': '/system/group',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        }
      ]
    },
    {
      'entity': {
        'id': 6,
        'parentMenuId': 0,
        'name': '用户管理',
        'icon': 'el-icon-news',
        'alias': '用户管理',
        'state': 'ENABLE',
        'sort': 1,
        'value': null,
        'type': 'NONE',
        'createUserId': 1
      },
      'childs': [
        {
          'entity': {
            'id': 7,
            'parentMenuId': 6,
            'name': '帐号管理',
            'icon': 'el-icon-phone-outline\r\n',
            'alias': '帐号管理',
            'state': 'ENABLE',
            'sort': 0,
            'value': '',
            'type': 'NONE',
            'createUserId': 1
          },
          'childs': [
            {
              'entity': {
                'id': 14,
                'parentMenuId': 7,
                'name': '邮箱管理',
                'icon': 'el-icon-sold-out\r\n',
                'alias': '邮箱管理',
                'state': 'ENABLE',
                'sort': 0,
                'value': '/content/email',
                'type': 'LINK',
                'createUserId': 1
              },
              'childs': null
            },
            {
              'entity': {
                'id': 13,
                'parentMenuId': 7,
                'name': '密码管理',
                'icon': 'el-icon-service\r\n',
                'alias': '密码管理',
                'state': 'ENABLE',
                'sort': 1,
                'value': '/content/pass',
                'type': 'LINK',
                'createUserId': 1
              },
              'childs': null
            }
          ]
        },
        {
          'entity': {
            'id': 8,
            'parentMenuId': 6,
            'name': '积分管理',
            'icon': 'el-icon-picture',
            'alias': '积分管理',
            'state': 'ENABLE',
            'sort': 1,
            'value': '/user/integral',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        }
      ]
    },
    {
      'entity': {
        'id': 9,
        'parentMenuId': 0,
        'name': '内容管理',
        'icon': 'el-icon-rank',
        'alias': '内容管理',
        'state': 'ENABLE',
        'sort': 2,
        'value': null,
        'type': 'NONE',
        'createUserId': 1
      },
      'childs': [
        {
          'entity': {
            'id': 10,
            'parentMenuId': 9,
            'name': '分类管理',
            'icon': 'el-icon-printer',
            'alias': '分类管理',
            'state': 'ENABLE',
            'sort': 0,
            'value': '/content/classify',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        },
        {
          'entity': {
            'id': 11,
            'parentMenuId': 9,
            'name': '文章管理',
            'icon': 'el-icon-star-on',
            'alias': '文章管理',
            'state': 'ENABLE',
            'sort': 1,
            'value': '/content/article',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        },
        {
          'entity': {
            'id': 12,
            'parentMenuId': 9,
            'name': '评论管理',
            'icon': 'el-icon-share',
            'alias': '评论管理',
            'state': 'ENABLE',
            'sort': 2,
            'value': '/content/comment',
            'type': 'LINK',
            'createUserId': 1
          },
          'childs': null
        }
      ]
    }
  ]
}
export default config
