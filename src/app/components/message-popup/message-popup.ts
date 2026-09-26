import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-message-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-popup.html',
  styleUrls: ['./message-popup.css'],
  animations: [
    trigger('popupAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.95) translateY(15px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
      })),
      transition('hidden => visible', animate('0.4s cubic-bezier(0.16, 1, 0.3, 1)')),
      transition('visible => hidden', animate('0.25s ease-out'))
    ])
  ]
})
export class MessagePopupComponent implements OnInit, OnDestroy {
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() openHeartTVNLModal = new EventEmitter<void>();

  // Danh sách hình ảnh
  images: string[] = [
    'Image/embe.jpg'
  ];

  currentSlideIndex: number = 0;
  currentStep: number = 0;
  private autoSlideInterval: any;

  // 5 bước chúc mừng sinh nhật
  steps: string[] = [
    'Chào mừng',
    'Khoảnh khắc',
    'Lời chúc',
    'Kỷ niệm',
    'Món quà'
  ];

  // Kỷ niệm sinh nhật ngọt ngào
  memories: any[] = [
    {
      icon: '🎂',
      title: 'Sinh nhật bên nhau',
      description: 'Mỗi một mùa sinh nhật được đồng hành cùng em đều là món quà quý giá nhất trong đời anh.'
    },
    {
      icon: '🌙',
      title: 'Những đêm tâm sự',
      description: 'Những cuộc trò chuyện thâu đêm suốt sáng, cùng chia sẻ từng ước mơ và dự định tương lai.'
    },
    {
      icon: '🤍',
      title: 'Lời hứa tuổi mới',
      description: 'Dù mai này có ra sao, anh vẫn luôn ở đây để yêu thương, chăm sóc và làm em cười thật nhiều.'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  handleImageError(event: any) {
    if (event.target.src.indexOf('Image/embe.jpg') === -1) {
      event.target.src = 'Image/embe.jpg';
    }
  }

  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.currentStep = index;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onClose() {
    this.stopAutoSlide();
    this.isVisible = false;
    this.currentStep = 0;
    setTimeout(() => {
      this.closePopup.emit();
    }, 250);
  }

  goToHeartPage() {
    this.stopAutoSlide();
    this.isVisible = false;
    this.currentStep = 0;
    this.openHeartTVNLModal.emit();
  }

  private startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  previousSlide() {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.images.length - 1 
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
