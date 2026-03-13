export const DISCORD_CONFIG = {
  clientId: '1335133474226438176',
  redirectUri: 'http://localhost:3000/auth/discord/callback',
  scope: 'identify email guilds',
  authUrl: 'https://discord.com/oauth2/authorize?client_id=1335133474226438176&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email%20guilds'
};

export const getDiscordAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: DISCORD_CONFIG.clientId,
    redirect_uri: DISCORD_CONFIG.redirectUri,
    response_type: 'code',
    scope: DISCORD_CONFIG.scope
  });
  return `${DISCORD_CONFIG.authUrl}?${params.toString()}`;
};
