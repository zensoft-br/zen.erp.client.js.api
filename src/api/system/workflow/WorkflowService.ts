import { Client } from "../../../Client.js";
import { ArgsWorkflowOpCreateOrUpdate } from "./ArgsWorkflowOpCreateOrUpdate.js";
import { Workflow } from "./Workflow.js";
import { WorkflowConnector } from "./WorkflowConnector.js";
import { WorkflowNode } from "./WorkflowNode.js";
import { Workpiece } from "./Workpiece.js";
import { WorkpieceNode } from "./WorkpieceNode.js";

export class WorkflowService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async workflowConnectorCreate(bean: WorkflowConnector): Promise<WorkflowConnector> {
    return this.#client.web.fetchJson("/system/workflow/workflowConnector", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workflowConnectorDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/workflow/workflowConnector/${id}`, {
      method: "DELETE",
      
    });
  }

  async workflowConnectorRead(search: any): Promise<WorkflowConnector[]> {
    return this.#client.web.fetchJson(`/system/workflow/workflowConnector?${search}`, {
      method: "GET",
      
    });
  }

  async workflowConnectorReadById(id: number): Promise<WorkflowConnector> {
    return this.#client.web.fetchJson(`/system/workflow/workflowConnector/${id}`, {
      method: "GET",
      
    });
  }

  async workflowConnectorUpdate(bean: WorkflowConnector): Promise<WorkflowConnector> {
    return this.#client.web.fetchJson("/system/workflow/workflowConnector", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workflowCreate(bean: Workflow): Promise<Workflow> {
    return this.#client.web.fetchJson("/system/workflow/workflow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workflowDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/workflow/workflow/${id}`, {
      method: "DELETE",
      
    });
  }

  async workflowNodeCreate(bean: WorkflowNode): Promise<WorkflowNode> {
    return this.#client.web.fetchJson("/system/workflow/workflowNode", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workflowNodeDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/workflow/workflowNode/${id}`, {
      method: "DELETE",
      
    });
  }

  async workflowNodeRead(search: any): Promise<WorkflowNode[]> {
    return this.#client.web.fetchJson(`/system/workflow/workflowNode?${search}`, {
      method: "GET",
      
    });
  }

  async workflowNodeReadById(id: number): Promise<WorkflowNode> {
    return this.#client.web.fetchJson(`/system/workflow/workflowNode/${id}`, {
      method: "GET",
      
    });
  }

  async workflowNodeUpdate(bean: WorkflowNode): Promise<WorkflowNode> {
    return this.#client.web.fetchJson("/system/workflow/workflowNode", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workflowOpApprove(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpApprove/${id}`, {
      method: "POST",
      
    });
  }

  async workflowOpApproveRevert(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpApproveRevert/${id}`, {
      method: "POST",
      
    });
  }

  async workflowOpCreateOrUpdate(args: any): Promise<any> {
    return this.#client.web.fetchJson("/system/workflow/workflowOpCreateOrUpdate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async workflowOpDisable(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpDisable/${id}`, {
      method: "POST",
      
    });
  }

  async workflowOpDisableRevert(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpDisableRevert/${id}`, {
      method: "POST",
      
    });
  }

  async workflowOpPrepare(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpPrepare/${id}`, {
      method: "POST",
      
    });
  }

  async workflowOpPrepareRevert(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflowOpPrepareRevert/${id}`, {
      method: "POST",
      
    });
  }

  async workflowRead(search: any): Promise<Workflow[]> {
    return this.#client.web.fetchJson(`/system/workflow/workflow?${search}`, {
      method: "GET",
      
    });
  }

  async workflowReadById(id: number): Promise<Workflow> {
    return this.#client.web.fetchJson(`/system/workflow/workflow/${id}`, {
      method: "GET",
      
    });
  }

  async workflowUpdate(bean: Workflow): Promise<Workflow> {
    return this.#client.web.fetchJson("/system/workflow/workflow", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async workpieceNodeRead(search: any): Promise<WorkpieceNode[]> {
    return this.#client.web.fetchJson(`/system/workflow/workpieceNode?${search}`, {
      method: "GET",
      
    });
  }

  async workpieceNodeReadById(id: number): Promise<WorkpieceNode> {
    return this.#client.web.fetchJson(`/system/workflow/workpieceNode/${id}`, {
      method: "GET",
      
    });
  }

  async workpieceOpForward(id: number, workflowNodeId: number): Promise<WorkpieceNode> {
    const sp = new URLSearchParams();
    if (workflowNodeId) sp.set("workflowNodeId", String(workflowNodeId));
    return this.#client.web.fetchJson(`/system/workflow/workpieceOpForward/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async workpieceOpRevert(id: number, workflowNodeId: number): Promise<WorkpieceNode> {
    const sp = new URLSearchParams();
    if (workflowNodeId) sp.set("workflowNodeId", String(workflowNodeId));
    return this.#client.web.fetchJson(`/system/workflow/workpieceOpRevert/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async workpieceRead(search: any): Promise<Workpiece[]> {
    return this.#client.web.fetchJson(`/system/workflow/workpiece?${search}`, {
      method: "GET",
      
    });
  }

  async workpieceReadById(id: number): Promise<Workpiece> {
    return this.#client.web.fetchJson(`/system/workflow/workpiece/${id}`, {
      method: "GET",
      
    });
  }

  }
