import * as d3 from 'd3';

export enum AppStep {
  Upload = "Upload",
  Extract = "Extract",
  Visualize = "Visualize",
  Generate = "Generate",
}

export interface Paper {
  id: string;
  name: string;
  status: 'parsing' | 'ready' | 'error' | 'ocr';
  content?: string;
  message?: string;
  progress?: number;
}

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  isCore: boolean;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  index?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface TopicSuggestion {
  topic: string;
  hypothesis: string;
  innovationScore: number;
  feasibility: string;
}

export interface Concept {
  id: string;
  name: string;
  children: GraphNode[];
}
