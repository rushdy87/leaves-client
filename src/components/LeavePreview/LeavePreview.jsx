import { dayInWritingMode } from '../../utils';

import './LeavePreview.scss';

const LeavePreview = ({ leave }) => {
  return (
    <div className='leave-preview-wrapper'>
      <div className='leave-preview'>
        {/* وزارة مصفي */}
        <div className='refinery_title'>
          <span className='bold'>وزارة النفط</span>
          <span className='bold'>مصفى كربلاء</span>
        </div>
        {/* العنوان */}
        <div className='leave_title'>
          <span className='bold'>استمارة طلب اجازة اعتيادية</span>
        </div>
        {/* معلومات الموظف */}
        <div className='employee_info'>
          <div className='employee_info_right'>
            <div className='employee_info_name'>
              <span>الاسم:</span>
              <span>{leave.name}</span>
            </div>
            <div className='employee_info_department'>
              <span>الشعبة:</span>
              <span>الاستلام والتجهيز</span>
            </div>
          </div>
          <div className='employee_info_left'>
            <div className='employee_info_request_date'>
              <span>التاريخ:</span>
              <span>{leave.requestDate}</span>
            </div>
            <div className='employee_info_record_number'>
              <span>رقم الحاسبة:</span>
              <span>{leave.recordNumber}</span>
            </div>
            <div className='employee_info_job_title'>
              <span>العنوان الوظيفي:</span>
              <span>{leave.jobTitle}</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='leave_duration'>
          <span>يرجى الموافقة على منحي اجازة اعتيادية لمدة:</span>
          <span>{dayInWritingMode(leave.duration)}</span>
        </div>
        <div className='leave_starting_date'>
          <span>اعتباراً من تاريخ:</span>
          <span>{leave.startingDate}</span>
        </div>
        <p className='leave_employee_signature'>توقيع طالب الاجازة</p>
        <div className='leave_hr'></div>
        {/* الموافقات */}
        <p className='bold'>نوافق على منحه الاجازة</p>
        <div className='leave_acception_signature'>
          <span>المسؤول المباشر</span>
          <span>مدير القسم</span>
          <span>معاون المدير العام</span>
        </div>
        <div className='leave_hr'></div>
        {/* الحسابات */}
        <div className='financial_department'>
          <span className='bold'>إلى قسم الحسابات</span>
          <p>
            المومأ إليه يستحق <span className='blank'> </span> يوماً من الاجازة
            الاعتيادية المذكورة
          </p>
          <p>
            آعلاه وبراتب تام و <span className='blank'></span>
            يوماً بنصف راتب و
          </p>
          <p>يوماً بدون راتب</p>
          <div className='financial_signature'>
            <span>موظف الاجازات</span>
            <span>مدير الأفراد</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePreview;
