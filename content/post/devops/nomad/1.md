---
description: "kubenates"
title: "kubenates"
date: 2022-11-11T11:43:56+07:00
featured_image: "/images/development.png"
tags: ["kubenates"]
---

Kubenates

Nguồn: https://xuanthulab.net/gioi-thieu-va-cai-dat-kubernetes-cluster.html

- Cài đặt kubenates là kubemini ngoài ra có thể khởi tạo từ docker desktop của macos or windows

- Cài đặt kubectl là kubenates client để tương tác với kubenates

- Chạy lệnh  kubectl cluster-info để kiểm tra xem quá trình cài đặt và config đúng chưa

- Kiểm tra có các node nào đang chạy trên máy:
kubectl get node

- Check thông tin node xem có bị quá tải gì ko bằng lệnh 
kubectl describe <Node>

"""
kubectl describe node/minikube                ✔ │ minikube ⎈  │ 10:42:24 
Name:               minikube
Roles:              control-plane
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=minikube
                    kubernetes.io/os=linux
                    minikube.k8s.io/commit=986b1ebd987211ed16f8cc10aed7d2c42fc8392f
                    minikube.k8s.io/name=minikube
                    minikube.k8s.io/primary=true
                    minikube.k8s.io/updated_at=2022_11_19T02_20_06_0700
                    minikube.k8s.io/version=v1.28.0
                    node-role.kubernetes.io/control-plane=
                    node.kubernetes.io/exclude-from-external-load-balancers=
Annotations:        kubeadm.alpha.kubernetes.io/cri-socket: unix:///var/run/cri-dockerd.sock
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Sat, 19 Nov 2022 02:20:03 +0700
Taints:             <none>
Unschedulable:      false
Lease:
  HolderIdentity:  minikube
  AcquireTime:     <unset>
  RenewTime:       Sat, 19 Nov 2022 10:42:55 +0700
Conditions:
### Check quá tải memmory, disk, process ở dưới đây status = false là không có
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  MemoryPressure   False   Sat, 19 Nov 2022 10:42:56 +0700   Sat, 19 Nov 2022 02:20:03 +0700   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Sat, 19 Nov 2022 10:42:56 +0700   Sat, 19 Nov 2022 02:20:03 +0700   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure      False   Sat, 19 Nov 2022 10:42:56 +0700   Sat, 19 Nov 2022 02:20:03 +0700   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready            True    Sat, 19 Nov 2022 10:42:56 +0700   Sat, 19 Nov 2022 02:20:06 +0700   KubeletReady                 kubelet is posting ready status
Addresses:
  InternalIP:  192.168.49.2
  Hostname:    minikube
Capacity:
  cpu:                12
  ephemeral-storage:  187805848Ki
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             16239448Ki
  pods:               110
Allocatable:
  cpu:                12
  ephemeral-storage:  187805848Ki
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             16239448Ki
  pods:               110
System Info:
  Machine ID:                 996614ec4c814b87b7ec8ebee3d0e8c9
  System UUID:                19ca53b7-42af-4dd6-90f5-9eaeccd257ad
  Boot ID:                    75274f03-f70e-411c-a13b-bc90748e9da9
  Kernel Version:             5.15.0-53-generic
  OS Image:                   Ubuntu 20.04.5 LTS
  Operating System:           linux
  Architecture:               amd64
  Container Runtime Version:  docker://20.10.20
  Kubelet Version:            v1.25.3
  Kube-Proxy Version:         v1.25.3
PodCIDR:                      10.244.0.0/24
PodCIDRs:                     10.244.0.0/24
Non-terminated Pods:          (7 in total)
  Namespace                   Name                                CPU Requests  CPU Limits  Memory Requests  Memory Limits  Age
  ---------                   ----                                ------------  ----------  ---------------  -------------  ---
  kube-system                 coredns-565d847f94-24fnc            100m (0%)     0 (0%)      70Mi (0%)        170Mi (1%)     8h
  kube-system                 etcd-minikube                       100m (0%)     0 (0%)      100Mi (0%)       0 (0%)         8h
  kube-system                 kube-apiserver-minikube             250m (2%)     0 (0%)      0 (0%)           0 (0%)         8h
  kube-system                 kube-controller-manager-minikube    200m (1%)     0 (0%)      0 (0%)           0 (0%)         8h
  kube-system                 kube-proxy-b28sg                    0 (0%)        0 (0%)      0 (0%)           0 (0%)         8h
  kube-system                 kube-scheduler-minikube             100m (0%)     0 (0%)      0 (0%)           0 (0%)         8h
  kube-system                 storage-provisioner                 0 (0%)        0 (0%)      0 (0%)           0 (0%)         8h
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                750m (6%)   0 (0%)
  memory             170Mi (1%)  170Mi (1%)
  ephemeral-storage  0 (0%)      0 (0%)
  hugepages-1Gi      0 (0%)      0 (0%)
  hugepages-2Mi      0 (0%)      0 (0%)
Events:
  Type    Reason                   Age              From             Message
  ----    ------                   ----             ----             -------
  Normal  Starting                 8h               kube-proxy       
  Normal  NodeHasSufficientMemory  8h (x5 over 8h)  kubelet          Node minikube status is now: NodeHasSufficientMemory
  Normal  NodeHasNoDiskPressure    8h (x5 over 8h)  kubelet          Node minikube status is now: NodeHasNoDiskPressure
  Normal  NodeHasSufficientPID     8h (x5 over 8h)  kubelet          Node minikube status is now: NodeHasSufficientPID
  Normal  Starting                 8h               kubelet          Starting kubelet.
  Normal  NodeAllocatableEnforced  8h               kubelet          Updated Node Allocatable limit across pods
  Normal  NodeHasSufficientMemory  8h               kubelet          Node minikube status is now: NodeHasSufficientMemory
  Normal  NodeHasNoDiskPressure    8h               kubelet          Node minikube status is now: NodeHasNoDiskPressure
  Normal  NodeHasSufficientPID     8h               kubelet          Node minikube status is now: NodeHasSufficientPID
  Normal  NodeReady                8h               kubelet          Node minikube status is now: NodeReady
  Normal  RegisteredNode           8h               node-controller  Node minikube event: Registered Node minikube in Controller
"""

