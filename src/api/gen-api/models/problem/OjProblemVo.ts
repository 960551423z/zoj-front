import type { JudgeConfig } from './JudgeConfig';
import type { JudgeCase } from '@/api/gen-api';

/**
 * 题目响应体
 */
export type OjProblemVo = {
  /**
   * id
   */
  id?: number;
  /**
   * 标题
   */
  title?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 标签列表（json 数组）
   */
  tags?: Array<string>;
  /**
   * 题目难度，简单，中等，困难
   */
  difficulty?: number;
  /**
   * 题目答案语言
   */
  ansLanguage?: string;
  /**
   * 题目答案
   */
  answer?: string;
  /**
   * 题目提交数
   */
  submitNum?: number;
  /**
   * 题目通过数
   */
  acceptedNum?: number;
  /**
   * 判题用例
   */
  judgeCase?: Array<JudgeCase>;
  judgeConfig?: JudgeConfig;
  /**
   * 点赞数
   */
  thumbNum?: number;
  /**
   * 收藏数
   */
  favourNum?: number;
};
