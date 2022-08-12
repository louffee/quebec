import type AgentDevice from './AgentDevice'

function userAgentDevice(): AgentDevice {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  return isMobile ? 'mobile' : 'desktop'
}

export default userAgentDevice
