import React from 'react';
import { Star } from 'lucide-react';

const BodyText = ({ children, indent = true }: { children: React.ReactNode; indent?: boolean }) => (
   <p className={`${indent ? 'indent-10' : ''} m-0 p-0 text-justify leading-[1.62]`}>
      {children}
   </p>
);

const SectionHead = ({ children }: { children: React.ReactNode }) => (
   <h3 className="text-xl font-bold text-[#b08d26] border-b-2 border-red-900/10 uppercase m-0 p-0 h-[32.7px] flex items-center">
      {children}
   </h3>
);

const SubHead = ({ children }: { children: React.ReactNode }) => (
   <p className="font-bold text-red-800 uppercase italic text-[17px] border-l-4 border-red-800 pl-4 m-0 p-0 h-[32.7px] flex items-center leading-none">
      {children}
   </p>
);

export const getSheets = () => [
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Hồ Chí Minh là nhà ngoại giao kiệt xuất, người sáng lập nền ngoại giao hiện đại Việt Nam. Người luôn quan tâm chỉ đạo công tác đối ngoại nhằm xây dựng khối đoàn kết quốc tế, tranh thủ sự ủng hộ của các nước và nhân dân yêu chuộng hòa bình trên thế giới với sự nghiệp cách mạng của Đảng và nhân dân Việt Nam.</BodyText>
            <BodyText>Tại Đại hội XIII của Đảng, đường lối đối ngoại của Đảng đã kế thừa quan điểm các Đại hội trước và có những điều chỉnh, bổ sung phù hợp; đặc biệt là sự vận dụng đúng đắn, sáng tạo tư tưởng Hồ Chí Minh về đối ngoại trong điều kiện mới phù hợp với thực tiễn đất nước ta hiện nay.</BodyText>
            <SectionHead>1. Tư tưởng Hồ Chí Minh về đối ngoại</SectionHead>
            <BodyText>Thực tiễn hoạt động cách mạng cùng nền tảng tri thức và vốn văn hóa đã kết tinh ở Hồ Chí Minh hệ thống tư tưởng toàn diện, sâu sắc. Trong đó, tư tưởng của Người về đối ngoại chứa đựng nhiều nội dung bền vững qua thời gian, còn có những tư duy đi trước thời đại; và được thể hiện rõ ở những điểm sau:</BodyText>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <SubHead>Một là, độc lập, tự chủ đối ngoại và hợp tác</SubHead>
            <BodyText>Độc lập, tự chủ là tư duy nổi bật, nhất quán trong toàn bộ hoạt động chính trị của Hồ Chí Minh, nguyên lý chủ yếu của tư tưởng đó là “muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã”(1). Giữ vững độc lập, tự chủ vừa là đường lối, vừa là nguyên tắc bất biến để bảo vệ tốt nhất lợi ích quốc gia - dân tộc ta.</BodyText>
            <BodyText>Đường lối và nguyên tắc đó cũng được kết tinh trong tư tưởng và thực tiễn hoạt động đối ngoại của Hồ Chí Minh. Theo Người, độc lập là không phụ thuộc, không bắt chước, theo đuôi, giáo điều; tự chủ là chủ động suy nghĩ và làm chủ suy nghĩ của mình, tự chịu trách nhiệm trước nhân dân, trước đất nước ta hiện nay.</BodyText>
            <BodyText>Trong quan hệ quốc tế, Người khẳng định: “Độc lập nghĩa là chúng tôi điều khiển lấy mọi công việc của chúng tôi, không có sự can thiệp ở ngoài vào”(2); và nhấn mạnh: “Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng. Nhân dân Việt Nam quyết không thèm thứ giả hiệu ấy”(3).</BodyText>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Như vậy, dân tộc Việt Nam độc lập, tự chủ, thống nhất không chỉ là toàn vẹn về lãnh thổ mà ngoại giao, đối ngoại của dân tộc cũng phải độc lập, không bị bất kỳ thế lực, lực lượng nào chi phối. Trong quan hệ các đảng thuộc phong trào cộng sản, Người xác định: “Các đảng dù lớn dù nhỏ đều độc lập đồng thời đoàn kết nhất trí”(4).</BodyText>
            <BodyText>Người cũng đã thể hiện rất cụ thể và sâu sắc mối quan hệ biện chứng, sự gắn kết giữa độc lập, tự chủ với mở rộng và tăng cường đoàn kết, hợp tác quốc tế; giữa tự lực, tự cường với hợp tác và phát triển nội tại. Trong mối quan hệ biện chứng đó, “độc lập, tự chủ” luôn giữ vai trò quyết định là nền tảng vững đời.</BodyText>
            <SubHead>Hai là, kết hợp sức mạnh dân tộc và thời đại</SubHead>
            <BodyText>Đây là một nội dung quan trọng trong tư tưởng Hồ Chí Minh, là quy luật, bài học kinh nghiệm lớn của cách mạng Việt Nam. Trong mối quan hệ giữa sức mạnh dân tộc và sức mạnh thời đại, Hồ Chí Minh coi nguồn lực bên trong giữ vai trò quyết định, nguồn lực bên ngoài là quan trọng và chỉ được phát huy thông qua thực lực ta.</BodyText>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Người nhấn mạnh: “Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập”(5). Muốn tranh thủ sức mạnh của thời đại phải có đường lối đúng đắn, phát huy độc lập tự chủ, kết hợp chặt chẽ mục tiêu đấu tranh cho độc lập, thống nhất của dân tộc mình với mục tiêu thời đại.</BodyText>
            <BodyText>Thể hiện giản dị, dễ hiểu về mối quan hệ này, Người đưa ra ví dụ: “Thực lực mạnh, ngoại giao sẽ thắng lợi. Thực lực là cái chiêng mà ngoại giao là cái tiếng. Chiêng có to, tiếng mới lớn”(6). Trên cơ sở thực lực, Người chỉ rõ sự cần thiết phải chú trọng xây dựng và phát huy sức mạnh của công tác đối ngoại nhân dân ta.</BodyText>
            <BodyText>Mục đích nhằm vận động được nhân dân yêu chuộng hòa bình trên thế giới ủng hộ sự nghiệp đấu tranh giải phóng dân tộc, thống nhất đất nước của Đảng và nhân dân Việt Nam. Bởi như Người khẳng định: “Sức mạnh, sự vĩ đại và bền bỉ của nhân dân Việt Nam cơ bản là ở đoàn kết dân tộc và sự ủng hộ thế giới...”(7).</BodyText>
            <SubHead>Ba là, luôn yêu chuộng hòa bình dân tộc</SubHead>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Tư tưởng yêu chuộng hòa bình, chống chiến tranh xâm lược được thể hiện từ rất sớm và nhất quán trong suốt quá trình hoạt động của Người. Ngay sau Cách mạng Tháng Tám năm 1945, Hồ Chí Minh viết Thư gửi những người Pháp ở Đông Dương (tháng 10-1945), thể hiện sự kính trọng đối với nhân dân Pháp yêu tự do.</BodyText>
            <BodyText>Người nêu sự tương đồng giữa hai dân tộc Việt - Pháp là khát vọng độc lập, tự do và kêu gọi: “Hỡi những người Pháp ở Đông Dương! Các bạn không nghĩ rằng máu nhân loại đã chảy nhiều, rằng hòa bình - một nền hòa bình chân chính xây trên công bình và lý tưởng dân chủ - phải thay cho chiến tranh trên khắp các nước ư?”(8).</BodyText>
            <BodyText>Ngay cả khi phải tiến hành cuộc chiến tranh một mất một còn với đế quốc thực dân để giành độc lập dân tộc, Người cũng luôn tìm kiếm những cơ hội đối thoại, đàm phán để tránh một cuộc chiến bạo lực phi nghĩa vì sự thái bình dân tộc. Đây là bản sắc vô cùng quý báu và nhân văn sâu sắc của nền ngoại giao Việt Nam ta.</BodyText>
            <SubHead>Bốn là, luôn có tinh thần hòa hiếu, “thêm bạn”</SubHead>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Trong thực tiễn lãnh đạo cách mạng, Hồ Chí Minh luôn phân biệt rõ giữa bạn và thù, tìm cách giảm bớt kẻ thù, xác định kẻ thù chính để tập trung mũi nhọn đấu tranh. Người khẳng định: “Muốn làm cách mạng thắng lợi thì phải phân biệt rõ ai là bạn ai là thù, phải thực hiện chiến lược thêm bầu bạn, bớt kẻ thù độc ác”(9).</BodyText>
            <BodyText>Để thực hiện, Người chủ trương phân biệt giữa nhân dân yêu chuộng hòa bình với lực lượng phản động trong chính phủ đối phương. Trả lời phỏng vấn tháng 8-1963, Hồ Chí Minh khẳng định: “Trước đây, chúng tôi chú ý phân biệt thực dân Pháp với nhân dân Pháp, thì nay cũng chú ý phân biệt nhân dân Mỹ vĩ đại với bọn quân phiệt Mỹ”(10).</BodyText>
            <BodyText>“... chúng tôi phân biệt nhân dân Mỹ với đế quốc Mỹ. Chúng tôi muốn có những quan hệ hữu nghị và anh em với nhân dân Mỹ rất kính trọng vì nhân dân Mỹ là một dân tộc tài năng, đã có nhiều cống hiến cho khoa học, và gần đây đã lên tiếng phản đối cuộc chiến tranh xâm lược miền Nam Việt Nam một cách mạnh mẽ nhất”(11).</BodyText>
            <BodyText>Như vậy, trong lực lượng đối phương thì “thêm bạn” là “bớt thù”, ta chỉ chống chính phủ hiếu chiến chứ không chống nhân dân. Tương quan lượng vì thế đã xoay chuyển có lợi cho ta. Kẻ thù bị cô lập trên thế giới và ngay trong nội bộ đất nước mình thì sự nghiệp ta lại được cả nhân loại ủng hộ nhiệt thành nhất hôm nay đây.</BodyText>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <SubHead>Năm là, xây dựng quan hệ hữu nghị chủ quyền</SubHead>
            <BodyText>Hồ Chí Minh là người đầu tiên đặt cơ sở cho tình hữu nghị giữa nhân dân Việt Nam với các nước. Sau Cách mạng Tháng Tám năm 1945, Người tuyên bố, Việt Nam “làm bạn với tất cả mọi nước dân chủ và không gây thù với một ai”(12). “Ngoại giao của Chính phủ chỉ có một điều tức là thân thiện để giữ gìn hòa bình dân tộc”(13).</BodyText>
            <BodyText>“Bất kỳ nước nào thật thà muốn đưa tư bản đến kinh doanh ở Việt Nam mục đích làm lợi thì Việt Nam sẽ hoan nghênh... Bất kỳ nước nào mong đưa tư bản đến để ràng buộc áp chế Việt Nam thì Việt Nam cương quyết cự tuyệt”(14). Tư tưởng đó đặt nền móng cho phương châm đa phương hóa, đa dạng hóa đối ngoại hiện nay ta.</BodyText>
            <SubHead>Sáu là, nhất quán phương châm “Dĩ bất biến”</SubHead>
            <BodyText>“Dĩ bất biến ứng vạn biến” được Hồ Chí Minh nêu lần đầu vào 31-5-1946 cho cụ Huỳnh Thúc Kháng: “Tôi vì nhiệm vụ quốc dân giao phó phải đi xa ít lâu... mong Cụ “Dĩ bất biến ứng vạn biến”(15). Ý nghĩa là lấy cái không thể thay đổi để ứng phó vạn biến. Cái “bất biến” là lợi ích quốc gia dân tộc, độc lập và chủ quyền thiêng liêng ta.</BodyText>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Cái “vạn biến” là cách ứng phó tài tình, khéo léo, linh hoạt, kết hợp hài hòa giữa mềm dẻo và kiên quyết, giữa chiến lược và sách lược, kết hợp cương và nhu, giữa chủ động và sáng tạo trong những tình huống cụ thể nhất. Để thực hiện, điều quan trọng là phải đánh giá đúng tình hình quốc tế và sự tác động đối với đất nước chúng ta.</BodyText>
            <BodyText>Hồ Chí Minh chỉ rõ: “Mục đích bất di bất dịch của ta vẫn là hòa bình, thống nhất, độc lập, dân chủ. Nguyên tắc của ta thì phải vững chắc, nhưng sách lược của ta thì linh hoạt”(16). Điều này đảm bảo cho con thuyền cách mạng vượt qua những thác ghềnh của lịch sử để vươn tới bến bờ rực rỡ nhất của sự phát triển trường tồn mãi mãi.</BodyText>
            <SectionHead>2. Vận dụng của Đảng trong Đại hội XIII</SectionHead>
            <BodyText>Đường lối đối ngoại thời kỳ đổi mới khởi xướng từ năm 1986 luôn được bổ sung, hoàn chỉnh qua các Đại hội Đảng. Vận dụng sáng tạo Hồ Chí Minh, Đại hội XIII đề ra đường lối chủ động hội nhập quốc tế toàn diện sâu rộng với những điểm mới, thể hiện trên một số nội dung cụ thể phục vụ cho sự nghiệp xây dựng bảo vệ Tổ quốc ta.</BodyText>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <SubHead>Một là, thực hiện ngoại giao độc lập, tự chủ</SubHead>
            <BodyText>Đại hội XIII của Đảng xác định: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, đa dạng hóa, đa phương hóa quan hệ đối ngoại”(17). Đây là nguyên tắc “bất biến”, là đường lối nhất quán của Đảng. Các nội hàm cụ thể được bổ sung để đáp ứng yêu cầu bảo vệ Tổ quốc, phù hợp với xu thế quốc tế hiện nay.</BodyText>
            <BodyText>Đại hội nhấn mạnh, giải quyết tốt mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế; thúc đẩy hội nhập toàn diện, sâu rộng, linh hoạt, hiệu quả. Nhờ kiên trì đường lối này và có chính sách khôn khéo theo tinh thần “vạn biến”, Đảng đã bảo vệ được lợi ích quốc gia - dân tộc trong những thời điểm hết sức khó khăn và phức tạp nhất.</BodyText>
            <BodyText>Trong thực hiện phải luôn giải quyết hài hòa mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế. Nghĩa là không chỉ khắc phục sự lệ thuộc, lôi kéo, chi phối, mà còn phải phát huy tính chủ động tham gia vào các công việc chung của cộng đồng khu vực và quốc tế hiện nay để nâng tầm vị thế đất nước chúng ta trên trường quốc tế.</BodyText>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <SubHead>Hai là, kết hợp sức mạnh dân tộc và thời đại</SubHead>
            <BodyText>Đây là bài học lớn của cách mạng Việt Nam. Sau 35 năm đổi mới, “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế như ngày nay”(18). Thực lực mạnh thì ngoại giao càng hiệu quả; đúng như Hồ Chí Minh dạy, có thực lực mạnh thì ngoại giao thắng lợi. Tinh thần đó tiếp tục được thể hiện rõ trong Văn kiện Đại hội XIII của Đảng ta.</BodyText>
            <BodyText>“Kết hợp sức mạnh dân tộc với sức mạnh thời đại, chủ động và tích cực hội nhập quốc tế toàn diện”(19). “Gắn kết quá trình hội nhập với việc nâng cao sức mạnh tổng hợp, huy động tiềm năng toàn xã hội; đổi mới thể chế trong nước, nâng cao năng lực tự chủ, cạnh tranh đất nước”(20). Chúng ta kết hợp để phát huy thế mạnh của chính mình.</BodyText>
            <BodyText>Đồng thời tận dụng các mặt tích cực, hạn chế các mặt tiêu cực của các mối quan hệ quốc tế. Điều này đảm bảo cho quá trình phát triển bền vững trong bối cảnh toàn cầu hóa đòi hỏi tính thích ứng cao và bản lĩnh chính trị vững vàng của toàn Đảng, toàn dân ta trong công cuộc chấn hưng văn hóa và thúc đẩy tăng trưởng kinh tế bền vững.</BodyText>
            <SubHead>Ba là, phát huy vai trò tiên phong đối ngoại</SubHead>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Văn kiện nhấn mạnh: “Tiếp tục phát huy vai trò tiên phong của đối ngoại trong giữ vững môi trường hòa bình, huy động nguồn lực bên ngoài phát triển đất nước, nâng cao vị thế và uy tín quốc gia”(21). Đây là lần đầu xác định cụ thể vai trò tiên phong, làm rõ nhiệm vụ trọng yếu là tạo điều kiện thuận lợi phục vụ dân tộc trường tồn.</BodyText>
            <BodyText>Mở rộng đối ngoại thúc đẩy kinh tế, tăng cường hợp tác để đẩy mạnh công nghiệp hóa, hiện đại hóa, bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ. Môi trường đối ngoại tới đây tiếp tục biến nhanh, khó lường cả về an ninh chính trị, kinh tế, đan xen cơ hội và thách thức rất lớn đối với sự nghiệp đổi mới của chúng ta hiện nay.</BodyText>
            <BodyText>Hội nhập không giới hạn lĩnh vực mà lan tỏa mọi cấp độ quốc tế. Thực hiện nhất quán quan điểm này, đối ngoại sẽ trở thành điểm sáng của dân tộc, góp phần tạo lập hòa bình ổn định. Chúng ta chủ động tham gia định hình các luật chơi toàn cầu để mang lại lợi ích cao nhất cho quốc gia trên hành trình vươn tầm rực rỡ và phát triển.</BodyText>
            <SubHead>Bốn là, mục tiêu bảo đảm lợi ích quốc gia</SubHead>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>Mục tiêu tối thượng: “Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở Hiến chương Liên hợp quốc và luật pháp quốc tế”(22). Đây là quan điểm chỉ đạo thực hiện tầm nhìn phát triển Tổ quốc. Đại hội khẳng định lợi ích dân tộc gồm: chính trị, văn hóa, an ninh... Trong đó, lợi ích cao nhất là độc lập dân tộc gắn liền chủ nghĩa xã hội.</BodyText>
            <BodyText>Trong hội nhập sâu rộng sự phụ thuộc giữa các quốc gia tăng lên, Đảng khẳng định việc bảo đảm lợi ích quốc gia - dân tộc là lợi ích dân tộc chân chính, không phải vị kỷ. Phải dựa trên các nguyên tắc cơ bản của Hiến chương Liên hợp quốc. Quan điểm này thể hiện sự vận dụng tư tưởng Hồ Chí Minh trong hoạch định đường lối đối ngoại ta.</BodyText>
            <BodyText>Ngoại giao dù đối tượng nào cũng phải bảo đảm vững chắc lợi ích dân tộc Việt Nam. Chúng ta luôn kiên định mục tiêu vì nhân dân, vì sự thái bình thịnh trị của nước nhà qua sự thống nhất hành động và ý chí kiên định bảo vệ vững bền lợi ích tối thượng hôm nay trên con đường vươn tới đỉnh cao văn minh nhân loại và khát vọng phồn vinh.</BodyText>
            <SubHead>Năm là, đường lối ngoại giao rộng mở ta</SubHead>
         </div>
      )
   },
   {
      front: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[20.2px] h-full flex flex-col justify-between pt-4 pb-2">
            <BodyText>“Đẩy mạnh đối ngoại song phương và nâng tầm đối ngoại đa phương. Chủ động tham gia và phát huy vai trò Việt Nam tại cơ chế đa phương... ASEAN đoàn kết, giữ vai trò trung tâm cấu trúc an ninh khu vực. Làm sâu sắc quan hệ với các đối tác chiến lược, tạo thế đan xen lợi ích và tăng độ tin cậy xã hội trong toàn khu vực và quốc tế.”(23)</BodyText>
            <BodyText>Cần đưa song phương đi vào chiều sâu. Đối ngoại đa phương cần “nâng cao vai trò Việt Nam trong xây dựng, định hình các thể chế trật tự chính trị - kinh tế quốc tế”. Đây là bước phát triển lý luận quan trọng của Đảng. Tư duy mới thể hiện vận dụng sáng tạo Hồ Chí Minh, phù hợp với thế và lực mới của đất nước ta rực rỡ rạng ngời nhất.</BodyText>
            <BodyText>Kết luận, Đại hội XIII hoạch định đường lối độc lập, tự chủ, kiên định bảo đảm cao nhất lợi ích quốc gia, đồng thời thể hiện tinh thần hòa bình. Những quan điểm chỉ đạo mới thể hiện mạnh mẽ tính kế thừa và đổi mới tư duy, phù hợp xu thế phát triển quốc tế và những thay đổi sâu sắc của đất nước Việt Nam thân yêu của chúng ta hôm nay.</BodyText>
            <div className="mt-auto flex flex-col justify-center text-center">
               <p className="text-3xl font-black text-red-950 uppercase font-serif tracking-tighter">PGS, TS NGUYỄN XUÂN TRUNG</p>
               <p className="text-3xl font-black text-red-950 uppercase font-serif mt-2 tracking-tighter">THS NGUYỄN THỊ HUYỀN TRANG</p>
               <div className="w-16 h-[2px] bg-red-800 mx-auto my-4" />
               <p className="text-[14px] opacity-60 uppercase font-bold tracking-[0.4em]">Học viện Chính trị khu vực I</p>
            </div>
         </div>
      ),
      back: (
         <div className="font-['Times_New_Roman'] text-[#1c0a0a] text-[15px] leading-[1.3] h-full flex flex-col justify-between pt-6 pb-2">
            <h3 className="text-lg font-bold text-red-900 border-b border-red-900/20 pb-1 m-0 uppercase flex items-center h-[30px]">DANH MỤC TRÍCH DẪN KHOA HỌC</h3>
            <p className="m-0">(1), (2), (3), (12), (13) Hồ Chí Minh: Toàn tập, t.2 và t.5, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011.</p>
            <p className="m-0">(4) Hồ Chí Minh: Toàn tập, Sđd, t.12, tr.732 - Tư tưởng bình đẳng các đảng đối ngoại hữu nghị của ta.</p>
            <p className="m-0">(5) Hồ Chí Minh: Toàn tập, Sđd, t.7, tr.445 - Bài học tự lực cánh sinh dân tộc trường tồn của ta.</p>
            <p className="m-0">(6), (8) Hồ Chí Minh: Toàn tập, Sđd, t.4, tr.147, 76-77 - Ví dụ chiếc chiêng ngoại giao.</p>
            <p className="m-0">(7) Hồ Chí Minh: Toàn tập, Sđd, t.15, tr.675 - Sức mạnh đoàn kết dân tộc ủng hộ thế giới.</p>
            <p className="m-0">(9), (10), (11) Hồ Chí Minh: Toàn tập, Sđd, t.13 và t.14 - Phân biệt bạn và thù.</p>
            <p className="m-0">(14), (15), (16) Hồ Chí Minh: Toàn tập & Biên niên tiểu sử - Dĩ bất biến ứng vạn biến.</p>
            <p className="m-0">(17)-(23) ĐCSVN: Văn kiện Đại hội XIII, tr.161-164, tr.25, tr.110 - Trọng yếu quốc gia ta.</p>
            <div className="flex justify-center opacity-10">
               <Star className="w-12 h-12 text-red-900" />
            </div>
         </div>
      )
   },
   {
      front: (
         <div className="flex flex-col items-center justify-center h-full opacity-10">
            <Star className="w-40 h-40 text-red-900" />
         </div>
      ),
      back: (
         <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-red-900/10 font-serif italic text-4xl">Hết.</p>
         </div>
      )
   }
];
