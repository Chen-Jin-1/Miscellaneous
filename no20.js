window.alert("远离 twenty，人人有责");
const extensionId = 'no20';
class no20 {
  getInfo() {
    return {
      id: extensionId,
      name: '事件',
      color1: Scratch.Colors.enents.primary,
      blocks: [
        {
          opcode: 'zyno20',
          text: '6',
          blockType: Scratch.BlockType.COMMAND,
        }
      ],
    }
  }
}
 
Scratch.extensions.register(new no20)
