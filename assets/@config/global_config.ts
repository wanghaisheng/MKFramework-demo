import * as cc from "cc";
import { DEBUG } from "cc/env";

/**
 * 全局配置
 * @internal
 */
namespace global_config {
	/** 常量 */
	export namespace constant {
		/** 显示左下角调试信息 */
		export const show_debug_info = false;
	}

	/** 音频 */
	export namespace audio {
		/** 音频组 */
		export enum group {
			/** 音效 */
			effect = -2,
			/** 音乐 */
			music,
		}
	}

	/** 资源 */
	export namespace resources {
		/** bundle信息 */
		export const bundle: {
			[k in keyof { internal: any; resources: any }]: k;
		} = new Proxy(Object.create(null), {
			get: (target, key) => key,
		});

		/** 缓存生命时长 */
		export const cache_lifetime_ms_n = 1000;
	}

	/** 视图 */
	export namespace view {
		/** 视图层类型 */
		export enum layer_type {
			内容,
			窗口,
			提示,
			引导,
			警告,
			加载,
		}

		/** 遮罩预制体路径 */
		export const mask_prefab_path_s = "db://assets/resources/module/@common/mask/resources_common_mask.prefab";
		/** 适配开关 */
		export const adaptation_switch_b = true;
		/** 初始设计尺寸 */
		export const original_design_size = cc.size();
		/** 阻塞警告时间（毫秒，生命周期函数执行时间超出设定值时报错） */
		export const blocking_warning_time_ms_n = DEBUG ? 5000 : 0;
	}

	/** 多语言配置 */
	export namespace language {
		/** 语种 */
		export enum type {
			/** 中文(中华人民共和国) */
			zh_cn,
			/** 英语(美国) */
			en_us,
		}

		/** 默认语言 */
		export const default_type: type = type[cc.sys.languageCode.replace(/-/g, "_")] ?? type.zh_cn;
		/** 参数标识前缀 */
		export const args_head_s = "{";
		/** 参数标识后缀 */
		export const args_tail_s = "}";
	}

	/** 日志 */
	export namespace log {
		/** 初始限制打印模块 */
		export const limit_log_module_ss = ["monitor"];
		/** 使用浏览器接口 */
		export const debug_use_browser_b = false; // DEBUG;
		/** 日志缓存行数 */
		export const cache_row_n = 100;
		/** 报错日志上传地址 */
		export const error_upload_addr_s = "";
	}

	/** 网络 */
	export namespace network {
		/** 消息头 */
		export interface proto_head {
			/** 消息 id */
			__id: number;
			/** 消息序列号 */
			__sequence?: number;
		}

		/** 消息头键 */
		export const proto_head_key_tab: { [key in keyof proto_head]: key } = new Proxy(Object.create(null), {
			get: (target, key) => key,
		});
	}
}

if (DEBUG) {
	self["global_config"] = global_config;
}
export default global_config;
