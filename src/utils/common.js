export function setTxsType(type) {
  // 设置交易展示内容
  if (type === "send") {
    return "转账";
  } else if (type === "create_validator" ) {
    return "创建验证者";
  }
}

// 设置统一延时时间
export const setDelayTimer = 3000