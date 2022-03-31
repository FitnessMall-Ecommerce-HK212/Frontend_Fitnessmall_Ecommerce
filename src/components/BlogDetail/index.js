import React from 'react'
import '../../styles/BlogDetail.css'
import HotBlog from '../Blog/HotBlog'
import DisplayComment from './DisplayComment'
import unknown_logo from '../../assets/img/secret_avatar.png'
import { CTAButton } from '../Buttons'
import BlogTag from './BlogTag'

export function UserInfo(e){
    return (
        <div className='userInfo'>
            <img src={unknown_logo} alt="avatar" />
            <div className='userName'>{e.name}</div>
        </div>
    )
}

const BlogDetail = () => {
  return (
    <div className='blogDetail'>
        <div className='leftContent'>
            <h3 className='blogTitle'>Mẹo vặt giảm cân trong những ngày đi học</h3>
            <p className='datePosted'>18/03/2022</p>
            <p className='blogContent'>
            Lịch học bận rộn, đồng nghĩa với việc chăm sóc bản thân cũng phần nào bị bỏ bê, quá trình giảm cân của các bạn học sinh, sinh viên cũng vì thế mà chững lại. Chính vì thế hôm nay, Na sẽ bật mí cho các bạn gái những mẹo nhỏ để chúng mình vừa có thời gian học tập mà vẫn đảm bảo duy trì tốt công cuộc giảm cân nhé

            <p>LUÔN LUÔN PHẢI ĂN SÁNG</p>

            <p>Nhiều bạn cứ nghĩ, chỉ cần nhịn ăn là sẽ gầy. Nhưng mà vậy là sai sai sai đó nha Bữa sáng là bữa quan trọng nhất, cung cấp năng lượng làm việc cho cả ngày của chúng mình. Nếu tụi mình bỏ qua bữa sáng thì sẽ có xu hướng ăn nhiều hơn vào các bữa tiếp theo nha

            Do vậy, Hana khuyến khích các bạn ăn no vào bữa sáng, ăn vừa cho bữa trưa và ăn ít vào bữa tối, như vậy chúng mình vừa có năng lượng để hoạt động cả ngày mà vẫn có thể giảm cân hiệu quả đó.</p>

            <p>LUÔN MANG NƯỚC THEO</p>

            <p>Uống đủ nước sẽ giúp quá trình trao đổi chất trong cơ thể diễn ra thuận lợi hơn, đồng thời tăng cảm giác no và ức chế cảm giác thèm ăn, do vậy tác động rất tốt tới chế độ giảm cân của chúng mình, ngoài ra uống nhiều nước sẽ giúp chúng mình có làn da khỏe và đẹp hơn nhé

            Na khuyên các bạn uống nước ngay sau khi thức dậy và trước mỗi bữa ăn để hạn chế lượng thực phẩm mà vẫn có cảm giác no lâu nhé</p>

            <p>TẬP LUYỆN KHI CÓ THỂ</p>

            <p>Không nhất thiết phải là những bài tập dài, mệt nhọc, chỉ đơn giản là vận động cơ thể bằng cách đứng lên ngồi xuống, đi bộ, đạp xe cũng là cách hiệu quả để tối ưu quá trình giảm cân đấy các nàng</p>

            <p>TẬN DỤNG CUỐI TUẦN THẬT HIỆU QUẢ</p>

            <p>Chúng mình đã bận rộn học hành cả tuần rồi, do vậy hãy dùng những ngày cuối tuần để chăm sóc bản thân nhiều hơn. Tranh thủ đi mua các loại thực phẩm có lợi cho sức khỏe, nấu sẵn hoặc nhờ mẹ nấu (nếu bạn nào chưa tự nấu ăn được) các bữa ăn theo đúng thực đơn giảm cân đủ dùng cho các ngày trong tuần, có thể đóng gói sẵn và dán nhãn cụ thể.</p>

            <p>HIIT là gì ?</p>

            <p>Nếu được, chúng mình cũng có thể tranh thủ tập các bài tập dài hơn để bù vào những ngày trong tuần tập luyện còn ít nhé</p>

            </p>
            <BlogTag />
            <div className='authorBlog'><UserInfo name="Hana Giang Anh" /></div>
            <div className='blockComment'>
                <div className='blockCmtTitle'>Bình Luận (2)</div>
                <div className='underScore'>______</div>
                <DisplayComment />
            </div>

            <div className='commentOnBlog'>
                <UserInfo name="DzitDzangXinkDep" />
                <div className='formComment'>
                    <input type='text' placeholder='Viết bình luận' className='commentInput' />
                    <CTAButton value='Thêm bình luận' />
                </div>
            </div>
        </div>
        <div className='rightBar'>
            <div className='hotBlog'>
                <div className='hotTitle'>BÀI VIẾT HAY</div>
                <HotBlog />
            </div>
            <div className='relatedBlog'>
                <div className='hotTitle'>BÀI VIẾT TƯƠNG TỰ</div>
                <HotBlog />
            </div>
        </div>
    </div>
  )
}

export default BlogDetail