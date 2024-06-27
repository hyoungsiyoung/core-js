/* global gsap */
export function shake(t) {
  const animation = gsap.to(t, {
    duration: 0.1, //재생시간
    x: -10,
    repeat: 5, //반복횟수
    yoyo: true,
  });

  return animation;
}
